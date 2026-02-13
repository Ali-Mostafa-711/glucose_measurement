"use client";
import useAxios from "@/app/items/hooks/useAxios";
import Image from "next/image";
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
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0643DD]/10 to-[#0643DD]/30 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden animate-[fadeInUp_0.6s_ease-out]">
        {/* Left - Logo / Brand */}
        <div
          className="hidden md:flex flex-col justify-center items-center bg-linear-to-br from-[#0643DD] to-indigo-700 text-white p-10
                animate-[fadeInUp_0.8s_ease-out]"
        >
          {/* Logo */}
          <div className="mb-6 animate-pulse">
            <div className="w-20 h-20 rounded-full bg-white text-[#0643DD] flex items-center justify-center text-3xl font-bold shadow-lg">
              <Image src="/logo2.png" alt="Logo" width={100} height={100} />
            </div>
          </div>

          <h3 className="text-3xl font-bold mb-3 text-center">Diabetes-care</h3>
          <p className="text-blue-100 text-center max-w-sm">
            Smarter diabetes management. Track glucose, get insights, and stay
            in control of your health.
          </p>
        </div>

        {/* Right - Form */}
        <div className="flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md animate-[slideInRight_0.7s_ease-out]">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              Welcome Back 👋
            </h2>
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
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0643DD]
           focus:outline-none transition hover:scale-[1.01]"
              />

              <input
                name="password"
                value={userData.password}
                onChange={handleChange}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0643DD]
           focus:outline-none transition hover:scale-[1.01]"
              />

              <button
                disabled={loading}
                className="w-full bg-[#0643DD] text-white py-3 rounded-lg font-semibold
           hover:bg-[#0537b8] transition hover:scale-[1.02] disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {error && (
                <p className="text-red-500 text-sm text-center">
                  {error.message || error}
                </p>
              )}
              {data?.msg && (
                <p className="text-green-500 text-sm text-center">{data.msg}</p>
              )}
            </form>

            <p className="text-sm text-center mt-6 text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-[#0643DD] font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
