import Head from "next/head";
import Banner from "../components/Banner";
import OverlayImage from "../components/OverlayImage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Banner></Banner>
      <OverlayImage></OverlayImage>
    </div>
  );
}
