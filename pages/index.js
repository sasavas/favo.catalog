import Head from "next/head";
import Layout from "../modules/common/components/Layout";
import SeasonCollections from "../modules/home/components/SeasonCollections";
import MainOverlayImage from "../modules/home/components/MainOverlayImage";
import Info from "../modules/home/components/Info";
import AgeCollections from "../modules/home/components/AgeCollections";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Layout>
        <MainOverlayImage />
        {/* <SeasonCollections /> */}
        <AgeCollections />
        <Info />
      </Layout>
    </div>
  );
}
