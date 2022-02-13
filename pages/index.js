import Head from "next/head";
import Layout from "../components/Layout";
import Collections from "../components/Collections";
import MainOverlayImage from "../components/MainOverlayImage";
import Info from "../components/Info";
import AgeCollections from "../components/AgeCollections";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Layout>
        <MainOverlayImage />
        <Collections />
        <Info />
        <AgeCollections />
      </Layout>
    </div>
  );
}
