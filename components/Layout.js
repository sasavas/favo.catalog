import React from "react";
import Container from "./Container";
import Banner from "./Banner";

function Layout({ children }) {
  return (
    <div>
      <Banner></Banner>
      <Container>
        <div className="filterMenu">Filter Menu</div>
        <div className="mainContent">{children}</div>
      </Container>
    </div>
  );
}

export default Layout;
