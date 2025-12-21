"use client";
import useAxios from "@/app/items/hooks/useAxios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { data, loading, error, refetch } = useAxios({
    url: "http://localhost:4000/user/login",
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
      console.log("Login success:", data);
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    }
    if (error) {
      console.error("Login error:", error);
    }
  }, [data, error]);

  return (
    <div className="min-h-[99vh] grid grid-cols-1 md:grid-cols-2 pt-22 -mb-16">
      {/* Left - Form */}
      <div className="flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-500 mb-8">
            Login to continue managing your health
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="email"
              value={userData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="password"
              value={userData.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <button
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {error && (
              <p className="text-red-500 text-lg text-center">
                {error.message || error}
              </p>
            )}
            {data && data.msg && (
              <p className="text-green-500 text-lg text-center">
                {data.msg}
              </p>
            )}
          </form>

          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <Link href="/auth/signup" className="text-blue-600 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right - Image */}
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="text-white text-center px-10">
          <h3 className="text-4xl font-bold mb-4">Smarter Diabetes Care</h3>
          <p className="text-lg text-blue-100">
            Track glucose, get insights, and stay healthy with NurturaRx.
          </p>
        </div>
      </div>
    </div>
  );
}
