import Head from "next/head";
import HomeContent from "../components/layout/Home/Index";

export default function Home() {
  return (
    <>
      <Head>
        <title>wes -- 👨🏽‍🚀</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeContent />
    </>
  );
}
