import { typeOfprojectsData } from "../../../data/projectsData/typeOfprojectsData";
import ProjectTypeCard from "./components/ProjectTypeCard";
import MainTitle from "../../MainTitle";
import {
  primaryblue,
  primarytextcolor,
  secondarydarkblue,
  secondarylightblue,
  sectionColor,
} from "../../../constants/colors";

const ProjectPage = () => {
  return (
    <div className="relative pt-11 md:pt-14 h-auto w-screen bg-primaryblue">
      <div className="my-11">
        <MainTitle
          outerDivColor={sectionColor}
          innerDivColor={secondarylightblue}
          textColor={secondarylightblue}
          bgColor={primaryblue}
          title="Our Projects"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {typeOfprojectsData.map((item, index) => {
          return (
            <ProjectTypeCard
              key={index}
              id={item.id}
              src={item.img}
              projectTypeName={item.type}
            />
          );
        })}
      </div>

      <div
        className="w-full h-screen bg-gray-50 mt-20  px-11"
        id="mobileAppDevelopment"
      >
        <div className="pt-24">
          <MainTitle
            outerDivColor={primaryblue}
            innerDivColor={secondarylightblue}
            textColor={secondarydarkblue}
            bgColor={sectionColor}
            title="Mobile App Development"
          />
        </div>
      </div>
      <div className="w-full h-screen bg-primaryblue px-11" id="webDevelopment">
        <div className="pt-24">
          <MainTitle
            outerDivColor={sectionColor}
            innerDivColor={secondarylightblue}
            textColor={secondarylightblue}
            bgColor={primaryblue}
            title="Web Development"
          />
        </div>
      </div>
      <div className="w-full h-screen bg-gray-50 px-11" id="machineLearning">
        <div className="pt-24">
          <MainTitle
            outerDivColor={primaryblue}
            innerDivColor={secondarylightblue}
            textColor={secondarydarkblue}
            bgColor={sectionColor}
            title="Machine Learning"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
