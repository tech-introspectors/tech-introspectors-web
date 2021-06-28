import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import {
  contactData,
  emailAddressData,
} from '../../../data/contactUsData/contactData';
import MultiCardTemplate from '../../MultiCardTemplate';

const ContactSection = () => {
  return (
    <div className="h-auto w-screen px-5  md:px-11 py-24 bg-gray-50">
      <div>
        <Fade>
          <MultiCardTemplate>
            <div className="grid md:grid-cols-2">
              <div className="w-full flex flex-col justify-center items-center col-span-1">
                <div className=" md:w-full md:pl-24 text-center pt-8 md:mt-0">
                  <h1 className="text-xl font-bold pb-2">Contact Us</h1>
                  {contactData.map((data, index) => {
                    return <p key={index}>+91 {data.mobileNumber}</p>;
                  })}

                  <h1 className="text-xl font-bold mt-11 pb-2">E-Mail Us</h1>
                  {emailAddressData.map((data, index) => {
                    return <p key={index}>{data.email}</p>;
                  })}
                </div>
              </div>
              <FadeRight>
                <div className="w-full md:w-11/12">
                  <img
                    className="w-full"
                    src="images/contactUsImg/contact-us.svg"
                  />
                </div>
              </FadeRight>
            </div>
          </MultiCardTemplate>
        </Fade>
      </div>
    </div>
  );
};

export default ContactSection;

const FadeRight = styled.div`
  animation-fill-mode: both;
  animation-duration: 2000ms;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: fadeRight;
  transform: translateX(120%);

  @keyframes fadeRight {
    0% {
      transform: translateX(120%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
