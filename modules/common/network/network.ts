const BASE_URL = "http://localhost:4000";

interface PaginationData {
  pageNumber?: number;
}
export function getProductsPathWPagination(
  paginationData: PaginationData
): string {
  const PAGE_SIZE = 20;
  return `${BASE_URL}/products?pageNumber=${
    paginationData.pageNumber ?? 0
  }&pageSize=${PAGE_SIZE}`;
}
