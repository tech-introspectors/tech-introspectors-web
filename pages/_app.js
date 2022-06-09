import "../styles/index.css";
import "../styles/LoadingPage.css";

import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import LoadingPage from "../components/LoadingPage/LoadingPage";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
