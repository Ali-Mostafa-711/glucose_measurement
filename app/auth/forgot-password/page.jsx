"use client";

import { useState } from "react";
import useAxios from "../../items/hooks/useAxios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const { loading, error, refetch } = useAxios({
    url: "http://localhost:4000/user/forgot-password",
    method: "POST",
    body: { email },
    immediate: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch().then(() => setSent(true));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Forgot your password?
        </h2>

        {sent ? (
          <p className="text-green-600 text-center">
            If this email exists, a reset link has been sent 📩
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg"
            />

            <button
              disabled={loading}
              className="w-full bg-[#0643DD] text-white py-3 rounded-lg font-semibold"
            >
              {loading ? "Sending..." : "Send reset link"}
            </button>

            {error && (
              <p className="text-red-500 text-sm text-center">
                {error.message || error}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
