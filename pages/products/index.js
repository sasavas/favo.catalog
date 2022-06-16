/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import styled from "styled-components";
import ProductListLayout from "../../modules/products/components/ProductListsLayout";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import { getProductsPathWPagination } from "../../modules/common/network/network.ts";
import { makeListProductsWImages } from "../../modules/products/services/MakeProductListWImages";

function ProductListing() {
  const { ref, inView } = useInView({ threshold: 0 });

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery("products", fetchResults, {
    getNextPageParam: (lastPage) => {
      console.log("last page", lastPage);
      const nextPageNumber = lastPage.info.pageNumber + 1,
        totalPages = lastPage.info.totalPages;
      const pageLeft = nextPageNumber <= totalPages;
      return pageLeft ? nextPageNumber : undefined;
    },
  });

  async function fetchResults({ pageParam }) {
    const res = await axios.get(
      getProductsPathWPagination({ pageNumber: pageParam })
    );
    res.data.products = await makeListProductsWImages(res.data.products);
    console.log("res", res);
    //return the whole result of the query (both result array and meta info)
    return res.data;
  }

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <ProductListLayout>
      <Wrapper>
        <h1>2022 Yaz Kreasyonu</h1>
        {status === "loading" ? (
          <p>Loading...</p>
        ) : status === "error" ? (
          <p>Error... {error.message} </p>
        ) : (
          <>
            <Gallery>
              {data.pages.map((page) => {
                return (
                  <React.Fragment key={page.nextId}>
                    {page.products.map((p) => {
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
                    })}
                  </React.Fragment>
                );
              })}
            </Gallery>
            <div ref={ref} className="ref-page-ending"></div>
          </>
        )}
      </Wrapper>
    </ProductListLayout>
  );
}

const Wrapper = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 2rem;
  }

  .ref-page-ending {
    display: block;
    /* this ref element is used to trigger more product fetch without */
    height: 16rem;
    margin-top: -10rem;
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
