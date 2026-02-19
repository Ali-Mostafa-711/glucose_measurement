"use client";

import useAxios from "../../items/hooks/useAxios";
import { useState } from "react";

export default function ReminderPage() {
  const [saved, setSaved] = useState(false);
  const [userData, setUserData] = useState({
    medicineName: "",
    reminderTime: "",
  });

  const { data, loading, error, refetch } = useAxios({
    url: "http://localhost:4000/reminder/add",
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

  const handleSubmit = () => {
    setSaved(true);
    console.log(userData);
    console.log(data);
    refetch();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#e0f4ff] to-[#ffffff] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md animate-[fadeInUp_0.6s_ease-out] scale-120">
        <h2 className="text-3xl font-bold mb-6 text-[#0643DD] text-center">
          Medication Reminder
        </h2>

        <input
          name="medicineName"
          value={userData.medicineName}
          onChange={handleChange}
          type="text"
          placeholder="Medication name"
          className="w-full px-4 py-3 border rounded-lg mb-4 focus:ring-2 focus:ring-[#0643DD] focus:outline-none transition hover:scale-[1.02]"
        />

        <input
          type="time"
          name="reminderTime"
          value={userData.reminderTime}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg mb-6 focus:ring-2 focus:ring-[#0643DD] focus:outline-none transition hover:scale-[1.02]"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-[#0643DD] text-white py-3 rounded-lg font-semibold hover:bg-[#0537b8] transition hover:scale-[1.03]"
        >
          Save Reminder
        </button>

        {saved && (
          <p className="mt-4 text-green-600 text-center animate-[fadeIn_0.5s_ease-out]">
            Reminder saved! You’ll receive an email notification 📧
          </p>
        )}

        {/* Animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
