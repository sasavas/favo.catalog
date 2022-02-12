import Head from "next/head";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import MainOverlayImage from "../components/MainOverlayImage";
import Info from "../components/Info";
import Footer from "../components/Footer";
import AgeCollections from "../components/AgeCollections";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Banner />
      <MainOverlayImage />
      <Collections />
      <Info />
      <AgeCollections />
      <Footer />
    </div>
  );
}
