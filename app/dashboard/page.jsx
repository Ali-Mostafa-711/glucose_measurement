import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-35">
      <h1 className="text-3xl font-bold mb-2">Welcome to Diabetes-care</h1>
      <p className="text-gray-600 mb-8">Choose what you want to do today</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Glucose */}
        <Link
          href="/dashboard/glucose"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:scale-105"
        >
          <h3 className="text-xl font-semibold mb-2">Measure Blood Glucose</h3>
          <p className="text-gray-500">
            Enter your blood sugar readings and get instant results.
          </p>
        </Link>

        {/* Reminder */}
        <Link
          href="/dashboard/reminder"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:scale-105"
        >
          <h3 className="text-xl font-semibold mb-2">Medication Reminder</h3>
          <p className="text-gray-500">
            Set reminders and receive notifications via email.
          </p>
        </Link>
      </div>
    </div>
  );
}
