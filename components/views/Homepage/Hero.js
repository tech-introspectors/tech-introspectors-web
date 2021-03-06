import styled from "styled-components";
import {
  primaryblue,
  secondarylightblue,
  secondarytextcolor,
} from "../../../constants/colors";

import TypeWriting from "../../TypeWriting";

const Hero = () => {
  return (
    <div className="relative bg-primaryblue py-24 w-full h-auto overflow-hidden">
      <div className="w-full h-full flex items-center flex-col-reverse md:flex-row gap-8">
        <div className="px-7 pb-11 md:pl-11 flex flex-col justify-center md:w-1/2">
          <Title
            datatype="Tech Introspectors"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Tech Introspectors
          </Title>

          <div className="h-[10vh] mb-4">
            <TypeWriting />
          </div>

          <p className="text-lg md:text-xl text-secondarytextcolor">
            We are a team of Tech enthusiast who code to bring a change!
          </p>
        </div>

        <div className="z-10 w-full lg:w-9/12">
          <img src="images/developer.svg" />
        </div>
      </div>

      <div className="w-screen absolute bottom-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgba(249, 250, 251,1)"
            fillOpacity="1"
            d="M0,288L40,288C80,288,160,288,240,261.3C320,235,400,181,480,144C560,107,640,85,720,106.7C800,128,880,192,960,234.7C1040,277,1120,299,1200,266.7C1280,235,1360,149,1400,106.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

const Title = styled.h1`
  color: #ffffff;
  position: relative;
  display: inline-block;
  white-space: nowrap;

  ::before {
    content: "Tech Introspectors ";
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid ${secondarylightblue};
    width: 0;
    height: 120%;
    color: ${secondarylightblue};

    animation: animate 6s linear infinite alternate;
    --webkit-animation: animate 6s linear infinite alternate;

    @keyframes animate {
      0% {
        width: 0;
      }
      50% {
        width: 100%;
      }
      100% {
        width: 0;
      }
    }
  }
`;
