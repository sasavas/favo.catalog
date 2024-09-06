import Head from "next/head";
import Layout from "../modules/common/components/Layout";
import MainOverlayImage from "../modules/home/components/MainOverlayImage";
import Info from "../modules/home/components/Info";
import Contact from "./Contact";
import AboutUs from "./AboutUs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Layout>
        <MainOverlayImage />
        <Info />
        <Contact />
        <AboutUs />
      </Layout>
    </div>
  );
}
