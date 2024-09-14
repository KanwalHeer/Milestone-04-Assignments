
"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
  
      if (result?.error) {
        setError("Invalid Credentials");
        console.log("login error");
        
      } else {
        router.push("/home"); // Navigate to home page
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="shadow-lg p-8 rounded-lg  bg-white max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sing In
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-2 px-4 rounded-md mt-4">
              {error}
            </div>
          )}

          <Link href="/auth/sign_up" className="text-sm text-black hover:underline mt-4 block text-center">
            Do not have an account? <span className="underline text-blue-700">Sign Up</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
