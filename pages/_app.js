import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import LoadingPage from "../components/LoadingPage/LoadingPage";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => setIsLoading(false), 5000);
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
