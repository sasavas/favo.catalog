import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;

  return <div>Product Details: This page will be available soon</div>;
};

export default ProductDetails;
