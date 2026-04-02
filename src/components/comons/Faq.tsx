import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    value: "shipping",
    number: 1,
    question: "What is an eSim?",
    answer:
      "We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders.",
    column: "left",
  },
  {
    value: "returns",
    number: 3,
    question: "How do I install my phonico eSim?",
    answer:
      "Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days.",
    column: "left",
  },
  {
    value: "payment",
    number: 5,
    question: "What payment methods does phonicoeSim accept?",
    answer:
      "Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days.",
    column: "left",
  },
  {
    value: "phonico",
    number: 2,
    question: "Is phonico eSim compatible with my phone?",
    answer:
      "We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders.",
    column: "right",
  },
  {
    value: "packaging",
    number: 4,
    question: "Can I use phonico outside the USA?",
    answer:
      "Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days.",
    column: "right",
  },
];

function Faq() {
  return (
    <>
      <div className="py-5  md:px-25 px-3 bg-(--bg-gray)">
        <div className="flex justify-center items-center font-medium">
          <h1 className="md:text-[50px] text-[20px]">
            Frequently Asked{" "}
            <span className="text-(--btn-pink)">Questions</span>
          </h1>
        </div>

        <p className="items-center flex justify-center md:text-[25px] text-[15px] text-ring">
          Curious About Our Services?
        </p>

        <div className="mt-7">
          <div>
            <Accordion
              type="single"
              collapsible
              className="max-w-lg flex md:flex-row flex-col md:gap-30 "
            >
            
              <div>
                {faqData
                  .filter((item) => item.column === "left")
                  .map((item) => (
                    <AccordionItem
                      key={item.value}
                      className="md:w-130 px-5 bg-background mb-5"
                      value={item.value}
                    >
                      <AccordionTrigger className="flex items-center text-[16px] hover:no-underline cursor-pointer">
                        <div className="flex items-center gap-3">
                          <span className="FaqNumber">{item.number}</span>
                          <span className="border-l border-foreground h-10"></span>
                          {item.question}
                        </div>
                      </AccordionTrigger>

                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
              </div>

          
              <div>
                {faqData
                  .filter((item) => item.column === "right")
                  .map((item) => (
                    <AccordionItem
                      key={item.value}
                      className="md:w-130 bg-background px-5 mb-5"
                      value={item.value}
                    >
                      <AccordionTrigger className="flex items-center text-[16px] hover:no-underline cursor-pointer">
                        <div className="flex items-center gap-3">
                          <span className="FaqNumber">{item.number}</span>
                          <span className="border-l border-foreground h-10"></span>
                          {item.question}
                        </div>
                      </AccordionTrigger>

                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
