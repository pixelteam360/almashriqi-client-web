"use client";
import MyTitle from "@/components/common/MyTitle";
import { faqData } from "@/constants/common";
import { TFaqData } from "@/types/common.type";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

const FAQ = () => {
  const [answer, setAnswer] = useState<TFaqData>({
    id: "001",
    question: "What areas do you cover?",
    answer:
      "We are based in North West London and offer same-day delivery across the UK, including major cities like Oxford, Birmingham, Liverpool, and Manchester. No matter where you need to send something — we’ve got you cover",
  });
  return (
    <div>
      <MyTitle title="Frequently Asked Questions" />

      <div className="md:flex md:mt-24 mt-20">
        <div className="md:w-1/2 z-10">
          {faqData.map((item: TFaqData) => (
            <div
              onClick={() => setAnswer(item)}
              key={item.id}
              className={`flex justify-between gap-2 p-6 border border-gray-50 hover:bg-[#FAFBFF] ${
                answer.id === item.id ? "bg-[#FAFBFF]" : "bg-white"
              }`}
            >
              <div className="flex items-center">
                <span
                  className={`w-5 h-5 rounded-full ${
                    answer.id === item.id ? "bg-primary" : "bg-[#BCDAE9]"
                  } mr-4`}
                ></span>
                {item.question}
              </div>
              <ChevronRight
                className={`${
                  answer.id === item.id ? "text-primary" : "text-[#BCDAE9]"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="md:w-1/2  p-8 md:-ml-24 relative">
          <div className="absolute w-full h-[120%]  bg-[#F6F6F6] -top-[10%] left-0 border-2 rounded-xl -z-10"></div>
          <div className="md:w-4/5 md:ml-auto space-y-12 ">
            <p className="font-bold text-lg">{answer.question}</p>
            <p>{answer.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
