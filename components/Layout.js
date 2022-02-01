import React from "react";
import styled from "styled-components";
import Image from "next/image";

function Layout({ children }) {
  return (
    <div>
      <Banner>
        <Container>
          <Image
            src="/favologo.png"
            alt="Favo Kids Logo"
            width="124"
            height="56"
          />
        </Container>
      </Banner>
      <Container>
        <div className="filterMenu">Filter Menu</div>
        <div className="mainContent">{children}</div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: 1rem 6rem;
  display: flex;
  gap: 2rem;
  min-width: 844px;

  .filterMenu {
    background-color: #dedede;
    padding: 1rem;
    flex: 1;
    min-width: 16rem;
  }

  .mainContent {
    flex: 4;
  }

  @media (max-width: 996px) {
    margin: 1rem;
  }

  @media (max-width: 768px) {
    /**TODO: For mobile screens */
  }
`;

const Banner = styled.div`
  padding: 0.4rem 0;
  background-color: #27374f;
`;

export default Layout;
