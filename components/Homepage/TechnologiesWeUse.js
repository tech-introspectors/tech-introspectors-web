import {
  primaryblue,
  secondarylightblue,
  sectionColor,
} from "../../constants/colors";
import { technologiesData } from "../../data/technologiesData/technologiesData";
import MainTitle from "../MainTitle";
import TechCard from "./components/TechCard";

const TechnologiesWeUse = () => {
  return (
    <div className="relative py-11 px-11 sm:p-11 md:p-24 h-auto w-screen bg-primaryblue">
      <div className="mb-11">
        <MainTitle
          outerDivColor={sectionColor}
          innerDivColor={secondarylightblue}
          textColor={secondarylightblue}
          bgColor={primaryblue}
          title="Technologies We Use"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-11">
        {technologiesData.map((item, index) => {
          return (
            <TechCard
              logoURL={item.logoURL}
              techName={item.techName}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TechnologiesWeUse;
