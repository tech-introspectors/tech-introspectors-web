import Form from "./components/Form";
import Fade from "react-reveal";

const FormSection = () => {
  return (
    <div className="h-auto w-screen grid grid-cols-2 md:grid-cols-3 md:flex-row justify-center items-center bg-primaryblue px-6 py-24 md:px-11">
      <Fade bottom>
        <div className="w-full col-span-2 relative flex items-center">
          <img
            className="lg:absolute max-w-5xl w-full lg:p-11"
            src="images/contactUsImg/recevingMail.svg"
          />
        </div>
      </Fade>

      <div className="col-span-2 md:col-span-1">
        <Fade top>
          <Form />
        </Fade>
      </div>
    </div>
  );
};

export default FormSection;
