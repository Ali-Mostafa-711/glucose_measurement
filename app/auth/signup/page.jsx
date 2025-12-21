"use client";
import useAxios from "@/app/items/hooks/useAxios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { data, loading, error, refetch } = useAxios({
    url: "http://localhost:4000/user/signup",
    method: "POST",
    body: userData,
    immediate: false, // مهم جدًا
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

  // مراقبة نتيجة اللوجين
  useEffect(() => {
    if (data) {
      console.log("signup success:", data);
      router.push("/auth/login");
    }
    if (error) {
      console.error("signup error:", error);
    }
  }, [data, error]);
  return (
    <div className="min-h-[99vh] grid grid-cols-1 md:grid-cols-2 pt-22 -mb-16">
      {/* Left - Image */}
      <div className="hidden md:flex items-center justify-center bg-linear-to-br from-indigo-700 to-blue-600">
        <div className="text-white text-center px-10">
          <h3 className="text-4xl font-bold mb-4">Join NurturaRx Today</h3>
          <p className="text-lg text-blue-100">
            Take control of your blood sugar and your health.
          </p>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>
          <p className="text-gray-500 mb-8">
            Start your health journey with us
          </p>

          <form className="space-y-5">
            <input
              name="name"
              value={userData.name}
              onChange={handleChange}
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="email"
              value={userData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="password"
              value={userData.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {data && data.msg}
            {error && (
              <p className="text-red-500 text-lg text-center">
                {error.message || error}
              </p>
            )}

            {
              loading && (<p className="text-blue-500 text-lg text-center">Signing up...</p>)
            }

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-600 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
