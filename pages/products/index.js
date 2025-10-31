import React, { useEffect } from "react";
import styled from "styled-components";
import ProductListLayout from "../../modules/products/components/ProductListsLayout";
import Link from "next/link";
import Image from "next/image";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

const PAGE_SIZE = 20;

function ProductListing({ initialPage }) {
  const { ref, inView } = useInView({ threshold: 0 });
  const router = useRouter();
  const { query } = router;

  const buildQueryString = (pageParam) => {
    const params = new URLSearchParams();
    params.set("pageNumber", String(pageParam ?? 0));
    params.set("pageSize", String(PAGE_SIZE));
    if (query.season) params.set("season", String(query.season));
    if (query.gender) params.set("gender", String(query.gender));
    if (query.ageGroup) params.set("ageGroup", String(query.ageGroup));
    return params.toString();
  };

  const fetchResults = async ({ pageParam = 0 }) => {
    const qs = buildQueryString(pageParam);
    const res = await fetch(`/api/products?${qs}`);
    if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
    return res.json();
  };

  const {
    status,
    data,
    error,
    fetchNextPage,
  } = useInfiniteQuery(["products", query.season || "", query.gender || "", query.ageGroup || ""], fetchResults, {
    getNextPageParam: (lastPage) => {
      const info = lastPage?.info || {};
      const nextPageNumber = (info.pageNumber ?? -1) + 1;
      if (info.hasNext === true) return nextPageNumber;
      if (typeof info.totalPages === "number") {
        const pageLeft = nextPageNumber <= info.totalPages;
        return pageLeft ? nextPageNumber : undefined;
      }
      const hasMore = Array.isArray(lastPage?.products) && lastPage.products.length === PAGE_SIZE;
      return hasMore ? nextPageNumber : undefined;
    },
    refetchOnWindowFocus: false,
    // hydrate with server-side first page
    initialData: initialPage
      ? { pages: [initialPage], pageParams: [initialPage?.info?.pageNumber ?? 0] }
      : undefined,
  });

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <ProductListLayout>
      <Wrapper>
        {status === "loading" ? (
          <p>Loading...</p>
        ) : status === "error" ? (
          <p>Error... {error.message} </p>
        ) : (
          <>
            <Gallery>
              {data.pages.map((page) => (
                <React.Fragment key={page.info.pageNumber}>
                  {page.products.map((p) => (
                    <Product key={p.id}>
                      <Link href={`/products/${p.id}`}>
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
                  ))}
                </React.Fragment>
              ))}
            </Gallery>
            <div ref={ref} className="ref-page-ending"></div>
          </>
        )}
      </Wrapper>
    </ProductListLayout>
  );
}

export async function getServerSideProps(context) {
  const pageNumber = 0;
  const pageSize = PAGE_SIZE;
  try {
    const host = context?.req?.headers?.host || "localhost:3001";
    const protocol = host.includes("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;
    const params = new URLSearchParams();
    params.set("pageNumber", String(pageNumber));
    params.set("pageSize", String(pageSize));
    if (context.query?.season) params.set("season", String(context.query.season));
    if (context.query?.gender) params.set("gender", String(context.query.gender));
    if (context.query?.ageGroup) params.set("ageGroup", String(context.query.ageGroup));
    const res = await fetch(`${baseUrl}/api/products?${params.toString()}`);
    const data = await res.json();
    return { props: { initialPage: data } };
  } catch (e) {
    return {
      props: {
        initialPage: {
          products: [],
          info: { pageNumber, totalPages: 0, hasNext: false },
        },
      },
    };
  }
}

const Wrapper = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 2rem;
  }

  .ref-page-ending {
    display: block;
    /* this ref element is used to trigger more product fetch */
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
