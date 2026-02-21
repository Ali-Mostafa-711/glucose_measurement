import Link from "next/link";

export default function BloodSugarSection() {
  return (
    <section className="py-20 bg-linear-to-br from-[#0643DD]/5 to-[#0643DD]/10 mb-40">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Track Your Blood Sugar Easily 🩸
          </h2>

          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Our platform allows you to measure, record, and track your blood
            sugar levels directly from the website. Stay informed, stay healthy,
            and take control of your diabetes with smart insights.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-gray-700">
              ✅ Easy blood sugar logging
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              🔔 Alerts for abnormal readings
            </li>
          </ul>

          <Link href={'/auth/login'} className="bg-[#0643DD] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0537b8] transition">
            Start Measuring Now
          </Link>
        </div>

        {/* Visual */}
        <div className="relative flex justify-center">
          <div className="w-80 h-80 rounded-2xl bg-white shadow-xl flex items-center justify-center text-center p-6">
            <div>
              <p className="text-gray-500 text-sm mb-2">Current Reading</p>
              <h3 className="text-5xl font-bold text-[#0643DD]">110</h3>
              <p className="text-gray-500 mt-2">mg/dL</p>
              <span className="inline-block mt-4 px-4 py-1 text-sm rounded-full bg-green-100 text-green-700">
                Normal Level
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
