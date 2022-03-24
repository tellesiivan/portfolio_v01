import "../styles/globals.css";
import "../styles/nprogress.css";
import Router from "next/router";
import nProgress from "nprogress";
import dynamic from "next/dynamic";
import Layout from "../components/layout/layout";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />{" "}
      <AnimatedCursor
        innerSize={8}
        outerSize={25}
        color="85, 85, 85"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={1.4}
      />
    </Layout>
  );
}

export default MyApp;
