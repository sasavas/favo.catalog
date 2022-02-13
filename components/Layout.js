import React from "react";
import Container from "./Container";
import Banner from "./Banner";
import styled from "styled-components";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Banner />
      <div className="mainContent">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
