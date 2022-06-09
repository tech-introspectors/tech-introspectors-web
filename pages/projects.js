import Head from "next/head";
import ProjectPage from "../components/views/ProjectPage/ProjectPage";

const OurProjects = () => {
  return (
    <div>
      <Head>
        <title>Tech-Introspectors / projects</title>
        <meta name="description" content="We are Tech Introspectors. We build robust applications using various technologies. Contact us if you're looking for any developers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen">
        <ProjectPage />
      </main>
    </div>
  );
};

export default OurProjects;
