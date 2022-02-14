import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import { useRouter } from "next/router";

function Layout({ children }) {
  const { locale } = useRouter();
  return (
    <>
      <Banner />
      <div className="mainContent">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
