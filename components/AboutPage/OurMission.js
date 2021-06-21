import MultiCardEffect from "./../MultiCardEffect";
import { ourMissionData } from "./../../data/aboutUsData/aboutUsData";

const OurMission = () => {
  return (
    <div className="w-screen flex justify-center items-center bg-primaryblue px-6 py-24 md:px-24">
      <div>
        <div className="bg-secondaryblue relative p-8 rounded-3xl">
          <div className="flex flex-col justify-between md:flex-row bg-white p-11 rounded-3xl">
            <div className="w-full md:w-4/6">
              <h1 className="text-primaryblue font-bold text-2xl">
                Our Mission
              </h1>
              {ourMissionData.map((item, index) => {
                return (
                  <p className="py-2 text-primarytextcolor">{item.mission}</p>
                );
              })}
            </div>
            <div className="w-full flex justify-end">
              <img
                className="w-full md:w-1/2"
                src="images/aboutUsImg/ourMission.gif"
                alt="our Mission"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
