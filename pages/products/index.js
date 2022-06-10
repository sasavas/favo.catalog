/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import getImageUrl from "../../lib/getImageUrl";
import ProductListLayout from "../../modules/products/components/ProductListsLayout";
import Link from "next/link";
import Image from "next/image";

/**
 *
 * @param {products} products this value is returned from
 * the getServerSideProps function below and passed here
 */
function ProductListing({ products }) {
  return (
    <ProductListLayout>
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
                          src={p.imageUrl}
                          alt={p.name}
                          objectFit="contain"
                          layout="responsive"
                          width={200}
                          height={300}
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
    </ProductListLayout>
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Product = styled.div`
  margin: 1rem 0.5rem 1rem 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media screen and (max-width: 768px) {
    :nth-of-type(odd) {
      margin-right: 0.5rem;
      margin-left: 0;
    }

    :nth-of-type(even) {
      margin-right: 0;
      margin-left: 0.5rem;
    }
  }

  .productImage {
    transition: all 0.3s ease-out;
  }

  .productInfo {
    .productDetails {
      margin: 1rem 0;

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
