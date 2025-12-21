"use client";
import React, { useState } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "How do I track my blood glucose using the app?",
      content: "You can easily record your blood sugar readings through your dashboard, and the system will automatically analyze your results and provide suitable insights."
    },
    {
      title: "How often should I check my blood sugar?",
      content: "We recommend checking your blood sugar daily or as advised by your doctor, especially before meals and after waking up."
    },
    {
      title: "Can the app suggest doctors for my case?",
      content: "Yes, you will see a list of recommended doctors based on your condition and readings."
    },
    {
      title: "What medications are available in the store?",
      content: "Our store includes diabetes medications, testing supplies, insulin pens, and more—each with detailed information and safe usage guidelines."
    },
    {
      title: "How do medication reminders work?",
      content: "You can set your drug schedule, and we will send reminders directly to your email so you never miss a dose."
    },
    {
      title: "Is my health data safe?",
      content: "Absolutely. All your data is encrypted and securely stored following healthcare data protection standards."
    },
  ];

  return (
    <div className="w-full mx-auto my-16 px-4 flex flex-col items-center gap-8 py-20">
      
      <span className="flex text-5xl items-center gap-3 text-blue-600 font-semibold tracking-wide">
        {/* <div className="w-2 h-2 bg-blue-600 rounded-full" /> */}
        FAQS
      </span>

      <h2 className="text-3xl font-bold mt-2 mb-6 text-gray-900">
       Our licensed pharmacists are available to answer any 
      </h2>

      <div className="space-y-4 w-4xl">
        {accordionData.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-xl shadow-sm bg-white"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 rounded-xl transition"
              onClick={() => handleAccordionClick(index)}
            >
              <h4 className="font-semibold text-gray-700">{item.title}</h4>

              <span
                className={`transform transition-transform duration-300 text-xl ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>

            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-600 animate-fadeIn">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
