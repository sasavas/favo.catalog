import React from "react";
import Container from "../../common/components/Container";
import Banner from "../../common/components/Banner";
import styled from "styled-components";
import Footer from "../../common/components/Footer";
import FiltersSidebar from "./FiltersSidebar";

function ProductListsLayout({ children }) {
  return (
    <Wrapper>
      <Banner></Banner>
      <Container>
        <div className="contentGrid">
          <aside className="filterMenu" aria-label="Filters">
            <FiltersSidebar />
          </aside>
          <main className="mainContent">{children}</main>
        </div>
      </Container>
      <Footer />
    </Wrapper>
  );
}

export default ProductListsLayout;

const Wrapper = styled.div`
  .contentGrid {
    display: grid;
    grid-template-columns: 16rem 1fr;
    gap: 2rem;
    align-items: start;
    margin-top: 2.4rem;
  }

  .filterMenu {
    background-color: #efefef;
    padding: 1rem;
    min-width: 16rem;
    border-radius: 0.4rem;
  }

  .mainContent {
    /* Main content area */
  }

  @media (max-width: 992px) {
    .contentGrid {
      grid-template-columns: 1fr;
    }

    .filterMenu {
      display: none;
    }
  }
`;
