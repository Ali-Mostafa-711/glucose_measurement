"use client";

import { useState } from "react";

export default function ReminderPage() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          Medication Reminder
        </h2>

        <input
          type="text"
          placeholder="Medication name"
          className="w-full px-4 py-3 border rounded-md mb-4"
        />

        <input
          type="time"
          className="w-full px-4 py-3 border rounded-md mb-4"
        />

        <button
          onClick={() => setSaved(true)}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Save Reminder
        </button>

        {saved && (
          <p className="mt-4 text-green-600 text-center">
            Reminder saved! You’ll receive an email notification 📧
          </p>
        )}
      </div>
    </div>
  );
}
