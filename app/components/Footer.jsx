"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubscribe = () => {
    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setSuccess("Subscribed successfully 🎉");
    setEmail("");
  };

  return (
    <footer className="bg-[#002278] text-gray-300 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Address */}
        <div>
          <h2 className="text-2xl font-bold text-white">Diabetes-care</h2>
          <p className="mt-3 text-sm leading-6">CAIRO , EGYPT</p>
          <p className="mt-2 text-sm">Phone: +201011944153</p>
          <p className="mt-2 text-sm">Email: diabetescare26@gmail.com</p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm flex flex-col">
            <Link
              href="/pages/about"
              className="hover:text-blue-400 transition"
            >
              About
            </Link>
            <Link
              href="/pages/products"
              className="hover:text-blue-400 transition"
            >
              Products
            </Link>
            <Link
              href="/pages/home/#values"
              className="hover:text-blue-400 transition"
            >
              Our Values
            </Link>
            <Link
              href="/pages/home/#faq"
              className="hover:text-blue-400 transition"
            >
              FAQS
            </Link>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <Link
              href={"https://wa.me/+201011944153"}
              target="_blank"
              className="hover:text-blue-400 transition cursor-pointer"
            >
              Customer Support
            </Link>
            {/* <li className="hover:text-blue-400 transition cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              Privacy Policy
            </li> */}
          </ul>
        </div>

        {/* Subscribe */}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-md bg-gray-800 text-gray-200 text-sm outline-none w-full"
            />
            <button
              onClick={handleSubscribe}
              className="bg-blue-600 px-4 py-2 rounded-r-md text-white text-sm hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </div>

          {/* Feedback */}
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-400 text-sm mt-2">{success}</p>}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © Copyright 2026, All Rights Reserved by Diabetes-care Inc.
      </div>
    </footer>
  );
}
