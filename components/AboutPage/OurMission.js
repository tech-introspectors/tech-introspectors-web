import MultiCardTemplate from "../MultiCardTemplate";
import { ourMissionData } from "./../../data/aboutUsData/aboutUsData";

const OurMission = () => {
  return (
    <div className="w-screen flex justify-center items-center bg-primaryblue px-6 py-24 md:px-24">
      <div>
        <MultiCardTemplate>
        <div className="w-full col-span-2">
              <h1 className="text-primaryblue font-bold text-2xl">
                Our Mission
              </h1>
              {ourMissionData.map((item, index) => {
                return (
                  <p className="py-2 text-primarytextcolor">{item.mission}</p>
                );
              })}
            </div>
            <div className="w-full h-full col-span-2 lg:col-span-1 flex items-center justify-center">
              <img
                className="w-9/12 md:w-8/12"
                src="images/aboutUsImg/ourMission.gif"
                alt="our Mission"
              />
            </div>
        </MultiCardTemplate>
      </div>
    </div>
  );
};

export default OurMission;
