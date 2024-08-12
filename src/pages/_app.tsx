import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import ScrollManager from "@/components/ScrollManager";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScrollManager />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
