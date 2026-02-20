"use client";
import useAxios from "../../items/hooks/useAxios";
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

  const [passwordError, setPasswordError] = useState("");

  const { data, loading, error, refetch } = useAxios({
    url: "http://localhost:4000/user/login",
    method: "POST",
    body: userData,
    immediate: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      if (value.length > 20) return;

      if (value.length < 5) {
        setPasswordError("Password must be at least 5 characters");
      } else {
        setPasswordError("");
      }
    }

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password.length < 5) {
      setPasswordError("Password must be at least 5 characters");
      return;
    }

    refetch();
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    }
  }, [data]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0643DD]/10 to-[#0643DD]/30 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden animate-[fadeInUp_0.6s_ease-out]">
        {/* Left - Logo / Brand */}{" "}
        <div className="hidden md:flex flex-col justify-center items-center bg-linear-to-br from-[#0643DD] to-indigo-700 text-white p-10 animate-[fadeInUp_0.8s_ease-out]">
          {/* Logo */}{" "}
          <div className="mb-6 animate-pulse">
            <div className="w-20 h-20 rounded-full bg-white text-[#0643DD] flex items-center justify-center text-3xl font-bold shadow-lg">
              <Image
                src="/logo2.png"
                alt="Logo"
                width={100}
                height={100}
              />{" "}
            </div>{" "}
          </div>{" "}
          <h3 className="text-3xl font-bold mb-3 text-center">Diabetes-care</h3>{" "}
          <p className="text-blue-100 text-center max-w-sm">
            Smarter diabetes management. Track glucose, get insights, and stay
            in control of your health.{" "}
          </p>{" "}
        </div>
        {/* Right */}
        <div className="flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              Welcome Back 👋
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="email"
                value={userData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email address"
                required
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                name="password"
                value={userData.password}
                onChange={handleChange}
                type="password"
                maxLength={20}
                placeholder="Password (6–20 chars)"
                required
                className="w-full px-4 py-3 border rounded-lg"
              />

              <p className="text-sm text-right">
                <Link
                  href="/auth/forgot-password"
                  className="text-[#0643DD] hover:underline"
                >
                  Forgot password?
                </Link>
              </p>

              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}

              <button
                disabled={loading || !!passwordError}
                className="w-full bg-[#0643DD] text-white py-3 rounded-lg font-semibold disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {error && (
                <p className="text-red-500 text-sm text-center">
                  {error.message || error}
                </p>
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
