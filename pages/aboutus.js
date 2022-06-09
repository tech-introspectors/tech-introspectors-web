import Head from "next/head";
import AboutPage from "../components/views/AboutPage/AboutPage";

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>Tech-Introspectors / About Us</title>
        <meta name="description" content="We are Tech Introspectors. We build robust applications using various technologies. Contact us if you're looking for any developers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen">
        <AboutPage />
      </main>
    </div>
  );
};

export default AboutUs;
