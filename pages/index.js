import Head from "next/head";
import HomePage from "./../components/views/Homepage/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech Introspectors</title>
        <meta name="description" content="We are Tech Introspectors. We build robust applications using various technologies. Contact us if you're looking for any developers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen">
        <HomePage />
      </main>
    </div>
  );
}
