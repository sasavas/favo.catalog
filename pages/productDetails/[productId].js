import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;

  return <div>Product Details: {productId}</div>;
};

export default ProductDetails;
