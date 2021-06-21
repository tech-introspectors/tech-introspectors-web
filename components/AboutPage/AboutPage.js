import OurServices from "./OurServices";
import OurMission from "./OurMission";

const AboutPage = () => {
  return (
    <div>
      <OurServices />
      <div className="min-h-screen bg-primaryblue">
        <OurMission />
      </div>
    </div>
  );
};

export default AboutPage;
