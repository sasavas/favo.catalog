// TODO: arrange this as per env variables
// when deployed use favo-bee.herokou.....
const BASE_URL = process.env.API_ROUTE;

console.log("BASE_URL", BASE_URL);

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
