import { typeOfprojectsData } from "../../../data/projectsData/typeOfprojectsData";
import ProjectTypeCard from "./components/ProjectTypeCard";
import MainTitle from "../../MainTitle";
import {
  primaryblue,
  secondarydarkblue,
  secondarylightblue,
  sectionColor,
} from "../../../constants/colors";

const ProjectPage = () => {
  return (
    <div className="relative py-11 px-11 md:p-14 h-auto w-screen bg-gray-50">
      <div className="my-11">
        <MainTitle
          outerDivColor={primaryblue}
          innerDivColor={secondarylightblue}
          textColor={secondarydarkblue}
          bgColor={sectionColor}
          title="Our Projects"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {typeOfprojectsData.map((item, index) => {
          return (
            <ProjectTypeCard
              key={index}
              src={item.img}
              projectTypeName={item.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectPage;
