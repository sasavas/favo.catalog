import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;

  //TODO: implement react-query here

  return <div>Product Details: This page will be available soon</div>;
};

export default ProductDetails;
