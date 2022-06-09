import { useRouter } from "next/router";
import { sectionColor, secondaryblue } from "../../../constants/colors";
import MainTitle from "../../MainTitle";
import Button from "../../Button/Button";
import CaroselSlider from "./components/CaroselSlider";
import Fade from "react-reveal/Fade";

const OurTopProjects = () => {
  const router = useRouter();

  const theme = {
    bgSecondaryColor: secondaryblue,
    width: "250px",
    fontWeight: "bold",
  };
  return (
    <div className="flex pt-24 flex-col w-screen h-auto bg-gray-50">
      <div>
        <MainTitle bgColor={sectionColor} title="Our Top Projects" />
      </div>
      <CaroselSlider />
      <div className="flex justify-center items-center bg-gray-50 mb-24">
        <Fade bottom>
          <Button onClick={() => router.push("/projects")} theme={theme}>
            View more projects
          </Button>
        </Fade>
      </div>
    </div>
  );
};

export default OurTopProjects;
