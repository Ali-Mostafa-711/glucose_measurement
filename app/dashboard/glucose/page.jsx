"use client";

import GlucoseCard from "@/app/items/cards/GlucoseCard";
import useAxios from "@/app/items/hooks/useAxios";
import Doctors from "@/app/pages/about/aboutComponents/Doctors";
import { useEffect, useState } from "react";
import FadeIn from "@/app/components/animations/FadeIn";
import SlideUp from "@/app/components/animations/SlideUp";
import ScaleIn from "@/app/components/animations/ScaleIn";

export default function GlucosePage() {
  const [inputError, setInputError] = useState("");
  const [userData, setUserData] = useState({
    value: "",
    time: "fasting",
  });

  const { data, loading, error, refetch } = useAxios({
    url: "http://localhost:4000/glucose/addReading",
    method: "POST",
    body: userData,
    immediate: false,
    headers: {
      Authorization: `Bearer ${typeof window !== "undefined" ? localStorage.getItem("token") : ""}`,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "value") setInputError("");
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const glucoseValue = Number(userData.value);
    if (!userData.value || isNaN(glucoseValue) || glucoseValue < 50 || glucoseValue > 600) {
      setInputError("Invalid number, please enter a value between 50 and 600");
      return;
    }
    setInputError("");
    refetch();
  };

  useEffect(() => {
    if (data) console.log("Success:", data);
    if (error) console.error("Error:", error);
  }, [data, error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gradient-to-br from-[#e0f2ff] to-[#cde6ff] pb-20 pt-40 px-4">
      <FadeIn className="w-full max-w-md">
        <SlideUp className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 transition-transform hover:scale-[1.02] duration-300">
          <h2 className="text-2xl font-bold mb-6 text-[#0643DD] text-center">
            Blood Glucose Measurement
          </h2>

          <input
            type="number"
            name="value"
            value={userData.value}
            onChange={handleChange}
            placeholder="Enter glucose (mg/dL)"
            className="w-full px-4 py-3 border rounded-lg mb-4 focus:ring-2 focus:ring-[#0643DD] focus:outline-none transition hover:scale-[1.01]"
          />
          {inputError && <p className="text-red-500 text-sm mb-3 text-center">{inputError}</p>}

          <select
            name="time"
            value={userData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg mb-4 focus:ring-2 focus:ring-[#0643DD] focus:outline-none transition hover:scale-[1.01]"
          >
            <option value="fasting">Morning (fasting)</option>
            <option value="before_meal">Before Meal</option>
            <option value="after_meal">After Meal</option>
            <option value="random">Random</option>
          </select>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#0643DD] text-white py-3 rounded-lg font-semibold hover:bg-[#0537b8] transition hover:scale-[1.02] disabled:opacity-50"
          >
            {loading ? "Checking..." : "Get Result"}
          </button>

          {error && (
            <p className="mt-2 text-red-500 text-center">{error.message || JSON.stringify(error)}</p>
          )}
        </SlideUp>
      </FadeIn>

      {data && !error && (
        <ScaleIn className="w-full max-w-4xl flex flex-col items-center gap-10">
          <div className="bg-white shadow-xl rounded-2xl p-6 w-full transition hover:scale-[1.01]">
            <h3 className="text-xl font-bold mb-4 text-center text-[#0643DD]">Glucose Measurement</h3>
            <ul className="space-y-3">
              <GlucoseCard key={data.id} measurement={data.measurement} />
            </ul>
          </div>

          {data.meals && (
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full transition hover:scale-[1.01]">
              <h3 className="text-xl font-bold mb-4 text-center text-[#0643DD]">
                Recommended Meals 🍽️
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.meals.map((meal, index) => (
                  <li key={index} className="shadow p-4 rounded-lg bg-gray-50 hover:scale-[1.02] transition">
                    <p className="font-semibold">{meal.name}</p>
                    <p className="text-sm text-gray-600">{meal.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ScaleIn>
      )}

      <SlideUp>
        {data && !error && <Doctors />}
      </SlideUp>
    </div>
  );
}
