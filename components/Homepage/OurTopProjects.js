import { sectionColor } from "../../constants/colors";
import { topProjectsData } from "../../data/projectsData/topProjectsData";
import MainTitle from "../MainTitle";
import ProjectDemoCard from "./components/ProjectDemoCard";

const OurTopProjects = () => {
  return (
    <div>
      <div>
        <MainTitle bgColor={sectionColor} title="Our Top Projects" />
      </div>
      <div className="px-24 bg-gray-50 flex flex-col md:flex-row whitespace-normal">
        {topProjectsData.map((item, index) => {
          return (
            <ProjectDemoCard
              source={item.projectImg}
              title={item.projectName}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurTopProjects;
