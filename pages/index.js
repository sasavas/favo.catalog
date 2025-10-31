import Head from "next/head";
import Layout from "../modules/common/components/Layout";
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
        <Info />
        <Contact />
        <AboutUs />
      </Layout>
    </div>
  );
}
