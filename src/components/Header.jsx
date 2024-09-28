"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MenuIcon, XIcon } from "lucide-react"; // Import icons from ShadCN (lucide-react)

export default function Header() {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -50,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
        duration: 0.8,
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      ref={headerRef}
      className="py-4 px-6 fixed w-full z-50  bg-gray-600  shadow-md"
    >
      <nav className="flex justify-between items-center">
        <a href="#" className="text-3xl font-bold ">
          Mominul Houqe
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="nav-item">
              <a
                href={`#${item.toLowerCase()}`}
                className=" text-lg font-medium hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className=" text-2xl">
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full  bg-opacity-95 flex flex-col items-center justify-center space-y-8 transform transition-transform duration-500 ease-in-out bg-gray-400 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu} // Close menu after clicking
              className=" text-2xl font-semibold hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
