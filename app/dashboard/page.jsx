"use client";

import Link from "next/link";
import FadeIn from "@/app/components/animations/FadeIn";
import SlideUp from "@/app/components/animations/SlideUp";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f2ff] to-[#cde6ff] p-8  flex flex-col items-center pt-60">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#0643DD] text-center">
          Welcome to Diabetes-care
        </h1>
        <p className="text-gray-600 mb-10 text-center">
          Choose what you want to do today
        </p>
      </FadeIn>

      <div className=" gap-8 max-w-4xl w-full flex items-center justify-center">
        {/* Glucose */}
        <SlideUp className="transition-transform duration-300">
          <Link
            href="/dashboard/glucose"
            className="bg-white  p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col gap-2"
          >
            <h3 className="text-xl font-semibold mb-1 text-[#0643DD]">
              Measure Blood Glucose
            </h3>
            <p className="text-gray-500">
              Enter your blood sugar readings and get instant results.
            </p>
          </Link>
        </SlideUp>

        {/* Reminder */}
        <SlideUp className="transition-transform duration-300 delay-150">
          <Link
            href="/dashboard/reminder"
            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col gap-2"
          >
            <h3 className="text-xl font-semibold mb-1 text-[#0643DD]">
              Medication Reminder
            </h3>
            <p className="text-gray-500">
              Set reminders and receive notifications via email.
            </p>
          </Link>
        </SlideUp>
      </div>
    </div>
  );
}
