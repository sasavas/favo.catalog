/**
 * !IMPORTANT Keep this file and implement it for product pages
 */

import Layout from "../../components/layout";

export default function Post({ productData }) {
  return (
    <Layout>
      {/*Do something with the product data here*/}
      <p>{productData.name}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  // get product ids from db
  return {
    paths: [{ params: { id: "productId1" } }, { params: { id: "productId2" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // populate the prop productData with the given id in params for this page
  return {
    props: {
      productData: getProductById(params.id),
    },
  };
}

const getProductById = (id) => {
  return {
    name: "product Name",
  };
};
