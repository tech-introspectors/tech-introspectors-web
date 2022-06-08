import React from "react";
import { faqData } from "../../../data/faqData";
import MainTitle from "../../MainTitle";
import { IoMdAdd } from "react-icons/io";

const Faq = () => {
  const [faqId, setFaqId] = React.useState(1);
  return (
    <div className="h-auto w-full  bg-gray-50 py-10">
      <MainTitle title={"FAQ"} description="Frequently Asked Questions" />

      <div className="w-full h-full flex items-center justify-center flex-col">
        {faqData.map((faq) => {
          return (
            <div className="my-1">
              <div className="max-w-md">
                <div
                  onClick={() => setFaqId(faq.id)}
                  className="px-3 py-2 flex justify-between items-center border-2 border-gray-300 cursor-pointer rounded-md"
                >
                  <h2 className="">{faq.question}</h2>
                  <IoMdAdd className="text-gray-400 cursor-pointer" />
                </div>
                <div
                  className={`transition-all duration-300 ${
                    faqId === faq.id
                      ? "h-[70px] opacity-1"
                      : "h-[0px] opacity-0"
                  }`}
                >
                  <p>{faq.answer}</p>
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
