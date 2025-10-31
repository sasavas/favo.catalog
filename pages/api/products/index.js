import axios from "axios";

const IMAGE_BASE = "https://files.joyolakids.com/ProductImages/";

function pickMainImage(imageArr) {
  if (!Array.isArray(imageArr) || imageArr.length === 0) return null;
  const sorted = [...imageArr].sort((a, b) => (a.imageOrder ?? 0) - (b.imageOrder ?? 0));
  return sorted[0] || null;
}

function toAbsoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return null;
  try {
    // already absolute
    const u = new URL(pathOrUrl);
    return u.toString();
  } catch (_) {
    const path = String(pathOrUrl).replace(/^\/+/, "");
    return `${IMAGE_BASE}${path}`;
  }
}

function mapProduct(dto) {
  const mainImg = pickMainImage(dto.imageUrls);
  const imageUrl = toAbsoluteUrl(mainImg?.thumbnailUrl || mainImg?.url);
  return {
    id: dto.id,
    code: dto.modelCode,
    name: dto.name,
    description: dto.description ?? "",
    imageUrl: imageUrl || "/favologo.png",
    // Keep original in case detail page needs them later
    _raw: dto,
  };
}

function buildInfo(meta, fallbackPageNumber, pageSize, itemsLength) {
  const pageNumber = Number(meta?.pageNumber ?? fallbackPageNumber ?? 0);
  const totalPages =
    typeof meta?.totalPages === "number"
      ? meta.totalPages
      : typeof meta?.totalCount === "number" && pageSize
      ? Math.ceil(meta.totalCount / pageSize)
      : undefined;
  const hasNext =
    typeof meta?.hasNext === "boolean"
      ? meta.hasNext
      : typeof totalPages === "number"
      ? pageNumber + 1 <= totalPages
      : itemsLength === pageSize;
  return { pageNumber, totalPages, hasNext };
}

export default async function handler(req, res) {
  const { pageNumber = "0", pageSize = "20", season, gender, ageGroup } = req.query;
  const backendUrl = "http://localhost:5000/api/public/products";

  try {
    const { data } = await axios.get(backendUrl, {
      params: { pageNumber, pageSize, season, gender, ageGroup },
      // Ensure we never leak cookies or headers
      withCredentials: false,
      headers: { Accept: "application/json" },
    });

    // Normalize possible response shapes
    const items = Array.isArray(data?.items)
      ? data.items
      : Array.isArray(data?.products)
      ? data.products
      : Array.isArray(data?.data)
      ? data.data
      : Array.isArray(data)
      ? data
      : [];

    const products = items.map(mapProduct);

    const meta = data?.meta || data?.page || data?.info || {
      pageNumber: Number(pageNumber),
      totalPages: data?.totalPages,
      totalCount: data?.totalCount,
      hasNext: data?.hasNext,
    };

    const info = buildInfo(meta, Number(pageNumber), Number(pageSize), products.length);

    res.status(200).json({ products, info });
  } catch (error) {
    const status = error?.response?.status || 500;
    const message =
      error?.response?.data?.message || error?.message || "Unknown error";
    res.status(status).json({ products: [], info: { pageNumber: Number(pageNumber), totalPages: 0, hasNext: false }, error: message });
  }
}
