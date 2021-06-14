import styled from "styled-components";
import { secondarylightblue } from "../constants/colors";

const CircleLoader = () => {
  return (
    <Div>
      <Circle1></Circle1>
      <Circle2></Circle2>
      <Circle3></Circle3>
      <Circle4></Circle4>
      <div className="bg-secondarylightblue w-3 h-3 rounded-full "></div>
    </Div>
  );
};

export default CircleLoader;

const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle1 = styled.div`
  width: 200px;
  height: 200px;
  border: 15px dotted ${secondarylightblue};
  border-radius: 50%;
  transition: transform 0.1s linear;
  animation: rotate 1s infinite alternate;
  position: absolute;

  @media (min-width: 640px) {
    width: 250px;
    height: 250px;
  }

  @keyframes rotate {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.3) rotate(20deg);
    }
  } ;
`;

const Circle2 = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 12px dotted ${secondarylightblue};
  border-radius: 50%;
  transition: transform 0.1s linear;
  animation: rotate1 1s infinite alternate;
  position: absolute;

  @media (min-width: 640px) {
    width: 170px;
    height: 170px;
  }

  @keyframes rotate1 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.3) rotate(-20deg);
    }
  } ;
`;

const Circle3 = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px dotted ${secondarylightblue};
  border-radius: 50%;
  transition: transform 0.1s linear;
  animation: rotate3 1s infinite alternate;
  position: absolute;

  @keyframes rotate3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2) rotate(20deg);
    }
  } ;
`;

const Circle4 = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px dotted ${secondarylightblue};
  border-radius: 50%;
  transition: transform 0.1s linear;
  animation: rotate4 1s infinite alternate;
  position: absolute;

  @keyframes rotate4 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.3) rotate(-20deg);
    }
  } ;
`;
