
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/home");
      } else {
        setError("User registration failed.");
      }
    } catch (error) {
      setError("Error during registration: " + error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="shadow-lg p-8 rounded-lg  border-blue-500 bg-white max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-2 px-4 rounded-md mt-4">
              {error}
            </div>
          )}

          <Link href="/auth/sign_in" className="text-sm text-blue-600 hover:underline mt-4 block text-center">
            Already have an account? <span className="underline">Sign In</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
