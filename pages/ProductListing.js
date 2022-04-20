/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import getImageUrl from "../lib/getImageUrl";
import Layout from "..//modules/products/components/ProductListsLayout";
import Link from "next/link";
import Image from "next/image";

function ProductListing({ products }) {
  return (
    <Layout>
      <Wrapper>
        <h1>2022 Yaz Kreasyonu</h1>
        <Gallery>
          {products ? (
            products.map((p) => {
              return (
                <Product key={p._id}>
                  <Link href={`/ProductDetails/${p._id}`}>
                    <a>
                      <div className="productImage">
                        <Image
                          width="320"
                          height="480"
                          src={p.imageUrl}
                          alt={p.name}
                          objectFit="contain"
                          layout="intrinsic"
                        />
                      </div>
                      <div className="productInfo">
                        <div className="productDetails">
                          <div>
                            <span id="code">{p.code} </span>
                            <span id="name">{p.name}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </Product>
              );
            })
          ) : (
            <p>Getting products</p>
          )}
        </Gallery>
      </Wrapper>
    </Layout>
  );
}

export async function getServerSideProps() {
  // fetch products from api
  // get images from firebase

  const response = await fetch("https://favo-be.herokuapp.com/products");
  const result = await response.json();
  const products = result.products;

  let pWImages = await makeListProductsWImages(products);
  pWImages.sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1));

  return {
    props: {
      products: pWImages,
    },
  };
}

const makeListProductsWImages = async (productArr) => {
  // get each image's url and add the new product to the new list
  // it only gets the main image
  // other (color) images will be fetched on the single product page
  let result = [];
  for (let i = 0; i < productArr.length; i++) {
    const url = await getImageUrl(productArr[i].imagePath);
    const pWUrl = { ...productArr[i], imageUrl: url };
    result.push(pWUrl);
  }

  return result;
};

const Wrapper = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 2rem;
  }
`;

const Gallery = styled.div`
  display: flex;
  gap: 1rem;

  margin: 1rem;
  margin-top: 4rem;
`;

const Product = styled.div`
  transition: 0.3s;
  font-size: 0.9rem;
  margin-bottom: 2rem;

  .productImage {
    transition: all 0.3s ease-out;
    overflow: hidden;
    border-radius: inherit;
  }

  .productInfo {
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;

    .productDetails {
      margin-top: 1rem;

      #code {
        font-weight: bold;
      }

      #name {
        max-lines: 2;
      }
    }
  }
`;

export default ProductListing;
