"use client";

import GlucoseCard from "@/app/items/cards/GlucoseCard";
import useAxios from "@/app/items/hooks/useAxios";
import Doctors from "@/app/pages/about/aboutComponents/Doctors";
import { useEffect, useState } from "react";

export default function GlucosePage() {
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
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch(); // هنا بنعمل request
  };

  useEffect(() => {
    if (data) {
      console.log(" success:", data);
    }
    if (error) {
      console.error(" error:", error);
    }
  }, [data, error]);

  if (typeof Window == "undefined") {
    return null;
  }

  return (
    <div>
      <div className="min-h-screen  flex items-center justify-center flex-col gap-10 bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Blood Glucose Measurement</h2>

          <input
            type="number"
            placeholder="Enter glucose (mg/dL)"
            name="value"
            value={userData.value}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md mb-4"
          />

          <select
            name="time"
            value={userData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md mb-4"
          >
            <option value="fasting">Morning (fasting)</option>
            <option value="before_meal">Before Meal</option>
            <option value="after_meal">After Meal</option>
            <option value="random">Random</option>
          </select>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Checking..." : "Get Result"}
          </button>

          {error && (
            <p className="mt-2 text-red-500 text-lg text-center">
              {error.message || JSON.stringify(error)}
            </p>
          )}
        </div>

        {data && !error && (
          <div className="results p-6 rounded-lg flex items-start justify-center gap-15 bg-white shadow ">
            <div className="mt-6 text-center">
              <h3 className="text-lg font-bold mb-3">Glucose Measurement</h3>
              <ul className="space-y-3">
                <GlucoseCard key={data.id} measurement={data.measurement} />
              </ul>
            </div>

            {data?.meals && !error && (
              <div className="mt-6 text-center">
                <h3 className="text-lg font-bold mb-3">Recommended Meals 🍽️</h3>

                <ul className="grid grid-cols-2 gap-4">
                  {data.meals.map((meal, index) => (
                    <li
                      key={index}
                      className="shadow p-4 pr-12 rounded-lg bg-gray-50"
                    >
                      <p className="font-semibold">{meal.name}</p>
                      <p className="text-sm text-gray-600">
                        {meal.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {data && !error && <Doctors />}
    </div>
  );
}
