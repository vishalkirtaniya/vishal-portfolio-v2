import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import ScrollManager from "@/components/ScrollManager";
import Menu from "@/components/menu/Menu";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScrollManager />
      <Menu />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
