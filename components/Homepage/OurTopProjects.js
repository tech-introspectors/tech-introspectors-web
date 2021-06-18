import { useRouter } from "next/router";
import { sectionColor, secondaryblue } from "../../constants/colors";
import MainTitle from "../MainTitle";
import Button from "../Button/Button";
import CaroselSlider from "./components/CaroselSlider";

const OurTopProjects = () => {
  const router = useRouter();

  const theme = {
    bgSecondaryColor: secondaryblue,
    width: "250px",
  };
  return (
    <div className="flex flex-col w-screen h-screen">
      <div>
        <MainTitle bgColor={sectionColor} title="Our Top Projects" />
      </div>
      <CaroselSlider />
      <div className="flex justify-center items-center bg-gray-50 pb-24">
        <Button theme={theme}>View more projects</Button>
      </div>
    </div>
  );
};

export default OurTopProjects;
