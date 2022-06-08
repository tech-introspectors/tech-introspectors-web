import React from "react";
import { faqData } from "../../../data/faqData";
import MainTitle from "../../MainTitle";
import { IoMdAdd } from "react-icons/io";

const Faq = () => {
  const [faqId, setFaqId] = React.useState(1);
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className="h-auto w-full  bg-gray-50 py-10">
      <MainTitle title={"FAQ"} description="Frequently Asked Questions" />

      <div className="w-[90%] mx-auto h-full flex items-center justify-center flex-col">
        {faqData.map((faq) => {
          return (
            <div key={faq.id} className="my-1">
              <div className="max-w-md">
                <div
                  onClick={() => {
                    setFaqId(faq.id);
                    setIsActive(!isActive);
                  }}
                  className="px-3 py-2 flex justify-between items-center border-2 border-secondaryblue/50 cursor-pointer rounded-md"
                >
                  <h2 className="text-secondaryblue">{faq.question}</h2>
                  <IoMdAdd className="text-secondaryblue cursor-pointer" />
                </div>
                <div
                  className={`transition-all duration-300 pointer-events-none
                ${
                  isActive && faqId === faq.id
                    ? "h-[80px] opacity-1"
                    : "h-[0px] opacity-0"
                }`}
                >
                  <p className="px-3 py-2 text-gray-500">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
