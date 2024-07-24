"use client";
import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";

interface QnaSectionProps {
  heading?: string;
  qnaData: {
    question: string;
    answer: string;
  }[];
}

const QnaSection: React.FC<QnaSectionProps> = ({ heading, qnaData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1240px] mt-40 bg-white/90 p-5 rounded-xl md:p-10 mx-auto px-5">
      <div className="md:text-[36px] text-[25px] font-bold text-black mx-auto text-center">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </div>
      {heading && (
        <p className="text-gray-900 text-base md:text-[24px]  mb-[40px] font-semibold mt-5">
          {heading}
        </p>
      )}
      <div className="flex flex-col gap-[30px]">
        {qnaData.map((item, index) => (
          <div className="max-w-[1240px] w-full " key={index}>
            <div
              className={` flex justify-between items-center gap-4 max-w-[1240px] w-full p-3 md:p-3 ${
                activeIndex === index ? "bg-blue-600" : "bg-gray-200"
              } rounded-md `}
            >
              <p
                className={`${
                  activeIndex === index ? "text-white" : "text-black"
                } text-base md:text-xl`}
              >
                {item.question}
              </p>
              <div
                className="bg-white w-5 h-5 md:w-7 md:h-7 rounded-full overflow-hidden grid justify-center items-center text-black text-sm md:text-base flex-shrink-0 cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                {activeIndex === index ? <TiMinus /> : <TiPlus />}
              </div>
            </div>
            <div
              className={` text-neutral-700 text-sm md:text-base transition-all duration-300  ${
                activeIndex === index
                  ? "max-h-full mt-[20px] p-2"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QnaSection;

