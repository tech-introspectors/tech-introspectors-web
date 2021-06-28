import Fade from 'react-reveal/Fade';

import Form from './components/Form';

const FormSection = () => {
  return (
    <div className="h-auto w-screen flex flex-col md:flex-row justify-center items-center bg-primaryblue px-6 py-24 md:px-11">
      <Fade left>
        <div className="w-full relative flex items-center">
          <img
            className="lg:absolute max-w-5xl w-full lg:p-2"
            src="images/contactUsImg/recevingMail.svg"
          />
        </div>
      </Fade>

      <Form />
    </div>
  );
};

export default FormSection;
