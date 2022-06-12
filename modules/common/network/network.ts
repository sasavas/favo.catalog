const BASE_URL = "https://favo-be.herokuapp.com/";

interface PaginationData {
  pageNumber?: number;
}
export function getProductsWPagination(paginationData: PaginationData): string {
  const PAGE_SIZE = 2;
  return (
    BASE_URL + "/products?pageNumber=" + paginationData.pageNumber ??
    0 + "&pageSize=" + PAGE_SIZE
  );
}
