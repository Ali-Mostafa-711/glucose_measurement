export default function Footer() {
  return (
    <footer className="bg-[#002278] text-gray-300 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Address */}
        <div>
          <h2 className="text-2xl font-bold text-white">NurturaRx</h2>
          <p className="mt-3 text-sm leading-6">New York Street, US-242424</p>
          <p className="mt-2 text-sm">Phone: +20 122 8099 652</p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 transition cursor-pointer">
              About
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              Products
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              News & Updates
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              Career
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 transition cursor-pointer">
              Customer Support
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Newsletter or Extra Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-sm mb-4">
            Subscribe to receive updates on diabetes care, new products, and
            health insights.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-md bg-gray-800 text-gray-200 text-sm outline-none w-full"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md text-white text-sm hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © Copyright 2024, All Rights Reserved by NurturaRx Inc.
      </div>
    </footer>
  );
}
