"use client";
import React, { useState } from "react";

type Faq = {
  question: { question: string };
  ans: string;
};

type AccordionProps = {
  faqs: Faq[];
};

const FaqList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: Faq[] = [
    {
      question: { question: "Question 1" },
      ans: "Answer 1",
    },
    {
      question: { question: "Question 2" },
      ans: "Answer 2",
    },
    {
      question: { question: "Question 3" },
      ans: "Answer 3",
    },
  ];

  return (
    <section className="pt-16 pb-10 lg:pt-[100px] lg:pb-20">
      <div className="container mx-auto">
        <div className="accordion_wrapper">
          {faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <div
                key={index}
                className="accordion border-b border-gray-300"
                id={`accordion${index}`}
              >
                <div
                  className="accordion_head flex justify-between items-center cursor-pointer py-4"
                  onClick={() => toggleAccordion(index)}
                >
                  <h4 className="accordion_head_title text-lg font-semibold">
                    {faq.question.question}
                  </h4>
                  <span
                    className={`accordion_head_toggler transform transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 8 6"
                      width="12"
                      height="10"
                      fill="none"
                      className="pointer-events-none stroke-slate-700"
                    >
                      <path
                        d="M7 1.5l-3 3-3-3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className={`accordion_body overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="accordion_content py-2">
                    <p className="text text-gray-600">{faq.ans}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">
              <p>No FAQs available.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqList;
