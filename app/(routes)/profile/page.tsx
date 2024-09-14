'use client';

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    return <div className="grid place-items-center h-screen">Loading...</div>;
  }

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Do not redirect automatically
    router.push('/auth/sign_in'); // Redirect to login page after logout
  };

  return (
    <div className="flex items-center justify-center m-3">
      <div className="shadow-lg p-8  bg-white rounded-xl border border-gray-200 flex flex-col gap-4">
        <h2 className="text-2xl text-blue-950 font-bold  mb-4">My Information</h2>
        <div className="text-lg">
          <div>
            <strong className="font-semibold">Name:</strong> {session.user?.name}
          </div>
          <div>
            <strong className="font-semibold">Email:</strong> {session.user?.email}
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-blue-950 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
