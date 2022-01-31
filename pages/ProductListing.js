/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

function ProductListing({ products }) {
  // ===DONE 1 fetch products from api
  // 2 get images from firebase

  return (
    <div>
      <p>Product list</p>
      {products ? (
        products.map((p) => {
          return (
            <React.Fragment key={p._id}>
              <p key={p._id}>
                {p.code} - {p.name} - {p.imagePath}
              </p>
              <CustomImg src="" />
            </React.Fragment>
          );
        })
      ) : (
        <p>Getting books</p>
      )}
      <Gallery>
        {/* <CustomImg src="/products/12300-sarı-main.jpg" alt="" />
        <CustomImg src="/products/12210-sarı.jpg" alt="" /> */}
      </Gallery>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://favo-be.herokuapp.com/products");
  const result = await response.json();
  const products = result.products;

  return {
    props: {
      products,
    },
  };
}
const Gallery = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
`;

const CustomImg = styled.img`
  border-radius: 0.4rem;
  object-fit: contain;
  width: 14rem;
`;

export default ProductListing;
