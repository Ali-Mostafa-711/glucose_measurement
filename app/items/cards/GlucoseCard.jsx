"use client";

export default function GlucoseCard({ measurement }) {
  if (!measurement) return null;

  const { value, time, status, message, createdAt } = measurement;

  const timeLabels = {
    fasting: "Morning (قبل الفطور)",
    before_meal: "Before Meal",
    after_meal: "After Meal",
    random: "Random",
  };

  const statusColors = {
    low: "bg-blue-200 text-blue-800",
    normal: "bg-green-200 text-green-800",
    prediabetes: "bg-yellow-200 text-yellow-800",
    diabetes: "bg-red-200 text-red-800",
    high: "bg-orange-200 text-orange-800",
    danger: "bg-red-400 text-white",
    unknown: "bg-gray-200 text-gray-800",
  };

  return (
    <div className=" rounded-lg p-4 shadow my-4 bg-gray-50 ">
      <div className="flex justify-between items-center mb-2">
        <span className={`px-2 py-1 rounded ${statusColors[status] || "bg-gray-200 text-gray-800"}`}>
          {status.toUpperCase()}
        </span>
        <span className="text-gray-500 text-sm">
          {new Date(createdAt).toLocaleString()}
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-1">Value: {value} mg/dL</h3>
      <p className="text-gray-600 mb-1">Time: {timeLabels[time] || time}</p>
      <p className="text-gray-700 font-medium">{message}</p>
    </div>
  );
}
