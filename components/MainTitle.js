import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import {
  primaryblue,
  primarytextcolor,
  secondarydarkblue,
  secondarylightblue,
  sectionColor,
} from '../constants/colors';

const MainTitle = ({
  title,
  description,
  bgColor,
  textColor,
  outerDivColor,
  innerDivColor,
}) => {
  return (
    <>
      <MainDiv
        bgColor={bgColor}
        className="py-2 flex justify-center items-center flex-col"
      >
        <Fade bottom>
          <Heading
            textColor={textColor}
            className="text-xl md:text-2xl lg:text-3xl font-bold uppercase"
          >
            {title}
          </Heading>
          <Div outerDivColor={outerDivColor}>
            <SubDiv innerDivColor={innerDivColor} />
          </Div>
        </Fade>
        <Fade top>
          <Description className="text-center py-5 text-lg font-semibold">
            {description}
          </Description>
        </Fade>
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
  background-color: ${({ outerDivColor }) =>
    outerDivColor ? outerDivColor : primaryblue};
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
  background-color: ${({ innerDivColor }) =>
    innerDivColor ? innerDivColor : secondarylightblue};
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

const Description = styled.p`
  color: ${({ descriptionColor }) =>
    descriptionColor ? descriptionColor : primarytextcolor};
`;
