import Head from "next/head";
import Layout from "../modules/common/components/Layout";
import MainOverlayImage from "../modules/home/components/MainOverlayImage";
import Info from "../modules/home/components/Info";
import AgeCollections from "../modules/home/components/AgeCollections";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Layout>
        <MainOverlayImage />
        <Info />
        <AgeCollections />
        <Contact />
      </Layout>
    </div>
  );
}
