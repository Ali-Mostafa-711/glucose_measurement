"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import useAxios from "../../items/hooks/useAxios";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");

  const { loading, error, refetch } = useAxios({
    url: "http://localhost:4000/user/reset-password",
    method: "POST",
    body: { token, password },
    immediate: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await refetch();
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
            className="w-full px-4 py-3 border rounded-lg"
          />

          <button
            disabled={loading}
            className="w-full bg-[#0643DD] text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Updating..." : "Reset Password"}
          </button>

          {error && (
            <p className="text-red-500 text-sm text-center">
              {error.message || error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
