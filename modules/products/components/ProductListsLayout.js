import React from "react";
import Container from "../../common/components/Container";
import Banner from "../../common/components/Banner";
import styled from "styled-components";
import Footer from "../../common/components/Footer";
import FiltersSidebar from "./FiltersSidebar";

function ProductListsLayout({ children, below }) {
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
      {below && (
        <div className="belowSections">
          <Container>{below}</Container>
        </div>
      )}
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

  .belowSections {
    margin-top: 2rem;
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
