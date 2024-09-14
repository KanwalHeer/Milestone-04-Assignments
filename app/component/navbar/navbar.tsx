'use client';
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  // Set toggle state
  const [toggleMenu, setToggleMenu] = useState(false);
  // Toggle function
  const toggleMenuHandle = () => {
    setToggleMenu(!toggleMenu);
  };

  // Helper function to get the user's initial
  const getUserInitial = (name?: string) => name?.charAt(0).toUpperCase();

  return (
    <div>
      {/* Navbar for md and lg screens */}
      <div className="hidden md:flex lg:flex items-center justify-between py-6 text-blue-700 font-bold px-6">
        {/* Links on the left side */}
        <div className="flex space-x-8">
          <Link href={'/home'} className="text-lg hover:border-b-2 hover:border-blue-800">Home</Link>
          <Link href={'/projects'} className="text-lg hover:border-b-2 hover:border-blue-800">Projects</Link>
          <Link href={'/users'} className="text-lg hover:border-b-2 hover:border-blue-800">Users</Link>
        </div>

        {/* User profile link on the right side */}
        <div className="flex items-center space-x-2">
          {session?.user ? (
            <Link href={'/profile'} className="text-md flex items-center space-x-1 px-6">
              <span className="font-bold text-white bg-blue-700 rounded-full w-9 h-9 flex items-center justify-center">
                {getUserInitial(session.user.name)}
              </span>
              {/* <span>{session.user.name}</span> */}
            </Link>
          ) : (
            <Link href={'/profile'} className="text-md">Profile</Link>
          )}
        </div>
      </div>

      
      {/* Navbar for small screens */}
      <div className="flex md:hidden justify-between items-end p-3 text-blue-700 font-bold rounded-md">
      <div>
        <button onClick={toggleMenuHandle} className="text-2xl">
          {toggleMenu ? <FaTimes /> : <FaBars />}
        </button>
        </div>

        <div className="flex items-center mt-4">
            {session?.user ? (
              <Link href={'/profile'} className="text-sm flex items-center space-x-2 px-6">
                <span className="font-bold text-white bg-blue-700 hover:bg-blue-400 rounded-full w-9 h-9 flex items-center justify-center">
                  {getUserInitial(session.user.name)}
                </span>
                {/* <span>{session.user.name}</span> */}
              </Link>
            ) : (
              <Link href={'/profile'} className="text-sm">Profile</Link>
            )}
          </div>

      </div>

      {/* Menu for small screens */}
      {toggleMenu && (
        <div className="md:hidden text-white font-bold bg-blue-700 p-4">
          <Link href={'/home'} className="block px-4 py-2 hover:bg-gray-700 text-lg">Home</Link>
          <Link href={'/projects'} className="block px-4 py-2 hover:bg-gray-700 text-lg">Projects</Link>
          <Link href={'/users'} className="block px-4 py-2 hover:bg-gray-700 text-lg">Users</Link>
          
        </div>
      )}
    </div>
  );
}
