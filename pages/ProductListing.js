/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import getImageUrl from "../lib/getImageUrl";
import Layout from "../components/Layout";

function ProductListing({ products }) {
  return (
    <Layout>
      <div>
        <h1>Product list</h1>
        <Gallery>
          {products ? (
            products.map((p) => {
              return (
                <Product key={p._id}>
                  <div className="productImage">
                    <img src={p.imageUrl} alt={p.name} />
                  </div>
                  <div className="productInfo">
                    <div className="productDetails">
                      <div>
                        <p id="code">{p.code}</p>
                        <p id="name">{p.name}</p>
                        <p id="fabricType">{p.fabricType}</p>
                      </div>
                    </div>
                  </div>
                </Product>
              );
            })
          ) : (
            <p>Getting products</p>
          )}
        </Gallery>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // ===DONE 1 fetch products from api
  // ===DONE 2 get images from firebase

  const response = await fetch("https://favo-be.herokuapp.com/products");
  const result = await response.json();
  const products = result.products;

  let pWImages = await makeListProductsWImages(products);

  return {
    props: {
      products: pWImages,
    },
  };
}

const makeListProductsWImages = async (productArr) => {
  // get each image's url and add the new product to the new list
  let pWImages = [];
  for (let i = 0; i < productArr.length; i++) {
    const url = await getImageUrl(productArr[i].imagePath);
    const newObj = { ...productArr[i], imageUrl: url };
    pWImages.push(newObj);
  }

  return pWImages;
};

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  gap: 1rem;

  margin: 1rem;
`;

const Product = styled.div`
  transition: 0.3s;
  max-width: 14rem;
  height: 27rem;
  font-size: 0.9rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  .btn {
    display: block;
  }

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .productImage {
    transition: all 0.3s ease-out;
    overflow: hidden;
    border-radius: inherit;
    width: 14rem;
    height: 21rem;

    img {
      width: 14rem;
      min-height: 21rem;
      object-fit: contain;
    }

    &:hover {
      img {
        transition: all 0.3s ease-out;
      }
    }
  }

  .productInfo {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: end;

    .productDetails {
      margin: 0.4rem 0.6rem;
      flex: 8;
      overflow: hidden;

      #fabricInfo {
        display: flex;
        justify-content: space-between;
      }

      #code {
        font-weight: bold;
      }

      #name {
        max-lines: 2;
      }
    }
  }
`;

// const CustomImg = styled.img`
//   border-radius: 0.4rem;
//   object-fit: contain;
//   width: 14rem;
// `;

export default ProductListing;
