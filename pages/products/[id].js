import { useRouter } from "next/router";
import Layout from "../../modules/common/components/Layout";

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;

  //TODO: implement react-query here

  return (
    <Layout>
      <p>Product Details: This page will be available soon</p>
      <p>Urun Detaylari: Bu sayfa yapim asamasindadir.</p>
    </Layout>
  );
};

export default ProductDetails;
