import "../styles/globals.css";
import dynamic from "next/dynamic";
import Layout from "../components/layout/layout";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />{" "}
      <AnimatedCursor
        innerSize={8}
        outerSize={25}
        color="85, 85, 85"
        outerAlpha={0.5}
        innerScale={1}
        outerScale={2}
      />
    </Layout>
  );
}

export default MyApp;
