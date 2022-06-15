import Faq from "./Faq";
import Hero from "./Hero";
import OurTopProjects from "./OurTopProjects";
import TechnologiesWeUse from "./TechnologiesWeUse";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <OurTopProjects />
      <TechnologiesWeUse />
      <Faq />
    </div>
  );
};

export default HomePage;
