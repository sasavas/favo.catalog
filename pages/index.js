import Head from "next/head";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import MainOverlayImage from "../components/MainOverlayImage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Banner></Banner>
      <MainOverlayImage></MainOverlayImage>
      <Collections></Collections>
    </div>
  );
}
