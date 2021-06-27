import styled from "styled-components";
import { secondarylightblue } from "../../../../constants/colors";

const ListCard = ({ data, animationDelay }) => {
  return (
    <div className="py-4 px-5 my-5 relative group overflow-hidden rounded-xl shadow-lg flex  items-center">
      <ListItme
        animationDelay={animationDelay}
        className="text-primarytextcolor/90 z-10 transition-all duration-700 font-semibold"
      >
        {data}
      </ListItme>
      <Div
        animationDelay={animationDelay}
        className="absolute left-0 h-full transition-all duration-700 w-2 text-secondarylightblue bg-primaryblue"
      />
    </div>
  );
};

export default ListCard;

const Div = styled.div`
  animation-name: animate;
  animation-iteration-count: 1;
  animation-duration: 1000ms;
  animation-delay: ${({ animationDelay }) => animationDelay};
  animation-fill-mode: forwards;

  @keyframes animate {
    0% {
      width: 0.5rem;
    }
    100% {
      width: 100%;
    }
  }
`;

const ListItme = styled.p`
  animation-name: animatep;
  animation-iteration-count: 1;
  animation-duration: 1500ms;
  animation-delay: ${({ animationDelay }) => animationDelay};
  animation-fill-mode: forwards;
  @keyframes animatep {
    0% {
    }
    100% {
      color: ${secondarylightblue};
    }
  }
`;
