import "@/styles/globals.css";
import Layout from "../../components/Layout";
import Head from "next/head";

// Importando e englobando o o Layout, o sistema entende que tudo que está dentro dele será dinamico
// Apenas o conteúdo Layout será estático 

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/../images/pokefavi.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}


