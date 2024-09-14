
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ heading, text, link, image }: { heading: string; text: string; link?: string; image?: string }) => {
  // State to determine screen size
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });

    // Function to handle screen resizing
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      data-aos={isLargeScreen ? "fade-down" : "fade-up"}
      className="bg-gray-300/40 text-blue-800 p-6 border border-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2">{heading}</h2>
        <p className="text-black mb-4">{text}</p>
      </div>
      <div className="mt-auto">
        {link ? (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-950 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors"
          >
            View Project
          </Link>
        ) : (
          <button className="block bg-[#000505] text-white text-center py-2 px-4 rounded-lg hover:bg-[#060d0ef1] transition-colors">
            More Info
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;