import {
  primaryblue,
  secondarydarkblue,
  secondarylightblue,
  sectionColor,
} from "../../constants/colors";
import { whyToReachUsData } from "../../data/contactUsData/whyToReachUsData";
import MainTitle from "../MainTitle";
import Fade from "react-reveal/Fade";

const LetsTalkSection = () => {
  return (
    <div className="h-auto w-screen flex flex-col justify-center items-center bg-gray-50 px-6 py-24 md:px-24">
      <div className="my-11 w-full">
        <MainTitle
          outerDivColor={primaryblue}
          innerDivColor={secondarylightblue}
          textColor={secondarydarkblue}
          bgColor={sectionColor}
          title="Let's Talk"
          description="Would like to sponsor a project. Get in touch with us!"
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row w-screen px-7 md:px-11">
        {/* Left size content */}
        <div className="bg-white w-full p-5 sm:p-11 shadow-xl rounded-3xl">
          <div>
            <h2 className="text-2xl font-bold text-primaryblue mb-8">
              Reach out to us if you are
            </h2>

            {whyToReachUsData.map((item, index) => {
              return (
                <div className="border-l-4 border-primaryblue bg-primaryblue/5 w-full h-full">
                  <p className="text-gray-900 my-5 pl-2.5 py-2" key={index}>
                    {item.purpose}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right size image */}
        <div className="w-full relative flex justify-center items-center">
          <img
            className="lg:absolute max-w-5xl w-full lg:p-8"
            src="images/contactUsImg/letsTalk.svg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default LetsTalkSection;
