import styled from "styled-components";
import {
  primaryblue,
  secondarydarkblue,
  secondarylightblue,
  sectionColor,
} from "../constants/colors";

const MainTitle = ({ title }) => {
  return (
    <>
      <MainDiv className="py-2 flex justify-center items-center flex-col">
        <Heading className="text-xl md:text-2xl lg:text-3xl font-bold">
          {title}
        </Heading>
        <Div>
          <SubDiv />
        </Div>
      </MainDiv>
    </>
  );
};

export default MainTitle;

const MainDiv = styled.div`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : sectionColor)};
`;

const Heading = styled.h1`
  color: ${({ textColor }) => (textColor ? textColor : secondarydarkblue)};
`;

const Div = styled.div`
  width: 20vw;
  height: 5px;
  border-radius: 20px;
  background-color: ${({ borderColor }) =>
    borderColor ? borderColor : primaryblue};
  margin-top: 15px;
  position: relative;
  overflow: hidden;

  @media (min-width: 648px) {
    width: 10vw;
  }
`;

const SubDiv = styled.div`
  width: 4vw;
  height: 5px;
  border-radius: 20px;
  background-color: ${({ borderColor }) =>
    borderColor ? borderColor : secondarylightblue};
  position: absolute;
  top: 0%;
  left: -12%;
  animation: moveNow 1s 0.5s steps(50, end) infinite alternate;

  @media (min-width: 768px) {
    width: 2vw;
  }

  @keyframes moveNow {
    from {
      left: -12%;
    }
    to {
      left: 90%;
    }
  }
`;
