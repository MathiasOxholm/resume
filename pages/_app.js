import "../styles/globals.scss";
import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/mo-fav.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <DefaultSeo
        titleTemplate="%s | oxholm.dev"
        openGraph={{
          type: "website",
          locale: "da",
          description:
            "Personal CV website for Mathias Oxholm, frontend developer.",
          site_name: "Mathias Oxholm | oxholm.dev",
          images: [],
        }}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
