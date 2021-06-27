import Head from "next/head";
import ProjectPage from "../components/views/ProjectPage/ProjectPage";

const OurProjects = () => {
  return (
    <div>
      <Head>
        <title>Tech-Introspectors / projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen">
        <ProjectPage />
      </main>
    </div>
  );
};

export default OurProjects;
