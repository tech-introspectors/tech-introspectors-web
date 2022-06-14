import styled from "styled-components";
import { secondarylightblue } from "../constants/colors";

const MultiCardEffect = ({ children }) => {
  return (
    <MainDiv>
      <Div className="relative p-8 rounded-3xl shadow-xl">
        <div className="bg-white p-2 rounded-3xl shadow-lg">{children}</div>
      </Div>
    </MainDiv>
  );
};

export default MultiCardEffect;

const MainDiv = styled.div`
  position: relative;

  ::after {
    content: "";
    position: absolute;
    background-color: ${secondarylightblue};
    opacity: 0.4;
    height: 100%;
    width: 100%;
    left: -5px;
    top: -20px;
    border-radius: 24px;
    z-index: -1;
    transform: rotate(1deg);
  }
`;

const Div = styled.div`
  background: linear-gradient(0.18deg, #022f47, 1.65%, #0ea5e9);
`;
