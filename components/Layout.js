import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" type="img/png" href="/htslogo-32x32.png" />
      </Head>

      <div id="main-container" className="prose">
        <Header />
        <main>{children}</main>
        <Footer className="mb-0" />
      </div>
    </>
  );
}