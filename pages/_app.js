import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import LoadingPage from "../components/LoadingPage/LoadingPage";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 3000);
    }
  });

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
