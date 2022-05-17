import {
  typeOfprojectsData,
  projectsShowCaseData,
} from "../../../data/projectsData/typeOfprojectsData";
import { ProjectCard, ProjectTypeCard } from "./components";

import MainTitle from "../../MainTitle";
import {
  primaryblue,
  secondarydarkblue,
  secondarylightblue,
  sectionColor,
} from "../../../constants/colors";

const ProjectPage = () => {
  return (
    <div className="relative pt-11 md:pt-14 h-auto w-full bg-primaryblue">
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
        className="w-full h-auto py-10 bg-gray-50 mt-20  px-11"
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

        <div className="flex flex-wrap justify-center gap-5 w-[95%] mx-auto">
          {projectsShowCaseData[0].mobileAppProjects.map((data, index) => {
            return (
              <ProjectCard
                key={index}
                projectImgSrc={data.projectImgSrc}
                projectCategory={data.category}
                projectDemoLink={data.projectDemoLink}
                projectName={data.projectName}
                projectDescription={data.projectDescription}
              />
            );
          })}
        </div>
      </div>
      <div
        className="w-full h-auto bg-primaryblue py-10 px-11"
        id="webDevelopment"
      >
        <div className="pt-16">
          <MainTitle
            outerDivColor={sectionColor}
            innerDivColor={secondarylightblue}
            textColor={secondarylightblue}
            bgColor={primaryblue}
            title="Web Development"
          />

          <div className="flex flex-wrap justify-center gap-5 w-[95%] mx-auto">
            {projectsShowCaseData[1].webDevelopmentProjects.map(
              (data, index) => {
                return (
                  <ProjectCard
                    key={index}
                    projectImgSrc={data.projectImgSrc}
                    projectCategory={data.category}
                    projectDemoLink={data.projectDemoLink}
                    projectName={data.projectName}
                    projectDescription={data.projectDescription}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
      <div
        className="w-full h-auto bg-gray-50 px-11 py-10"
        id="machineLearning"
      >
        <div className="pt-16">
          <MainTitle
            outerDivColor={primaryblue}
            innerDivColor={secondarylightblue}
            textColor={secondarydarkblue}
            bgColor={sectionColor}
            title="Machine Learning"
          />

          <div className="flex flex-wrap justify-center gap-5 w-[95%] mx-auto">
            {projectsShowCaseData[2].mlProjects.map((data, index) => {
              return (
                <ProjectCard
                  key={index}
                  projectImgSrc={data.projectImgSrc}
                  projectCategory={data.category}
                  projectDemoLink={data.projectDemoLink}
                  projectName={data.projectName}
                  projectDescription={data.projectDescription}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
