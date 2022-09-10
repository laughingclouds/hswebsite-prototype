import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <style jsx global>{`
          #__next {
            min-width: 100vw;
          }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
