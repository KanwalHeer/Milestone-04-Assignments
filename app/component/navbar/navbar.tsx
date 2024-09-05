'use client'
import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"


export default function Navbar() {
  // Set toggle state
  const [toggleMenu, setToggleMenu] = useState(false)

  // Toggle function
  const toggleMenuHandle = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div>
      {/* Navbar for md and lg screens */}
      <div className="hidden md:flex lg:flex justify-center space-x-8 py-3 text-blue-900 font-bold">
        <Link href={'/'} className="text-md hover:border-b-2 hover:border-blue-800">Posts</Link>
        <Link href={'/create'} className="text-md hover:border-b-2 hover:border-blue-800">Create Post</Link>
        <Link href={'/profile'} className="text-md hover:border-b-2 hover:border-blue-800">Profile</Link>
        <Link href={'/logout'} className="text-md hover:border-b-2 hover:border-blue-800">Logout</Link>
      </div>

      {/* Navbar for small screens */}
      <div className="flex md:hidden justify-end items-end p-3 text-blue-900 font-bold rounded-md ">
        {/* <div className="text-xl">Navbar</div> */}
        <button onClick={toggleMenuHandle} className="text-lg">
          {toggleMenu ? <FaTimes/> : <FaBars/>}
        </button>
      </div>

      {/* Menu for small screens */}
      {toggleMenu && (
        <div className="md:hidden text-white font-bold bg-blue-900 p-4">
          <Link href={'/'} className="block px-4 py-2 hover:bg-gray-200 text-sm">Posts</Link>
          <Link href={'/create'} className="block px-4 py-2 hover:bg-gray-200 text-sm">Create Post</Link>
          <Link href={'/profile'} className="block px-4 py-2 hover:bg-gray-200 text-sm">Profile</Link>
          <Link href={'/logout'} className="block px-4 py-2 hover:bg-gray-200 text-sm">Logout</Link>
        </div>
      )}
    </div>
  )
}
