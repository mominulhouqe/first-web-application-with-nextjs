"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MenuIcon, XIcon } from "lucide-react";

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
      className="py-4 px-6 fixed z-50 w-full bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-pink-800/80  shadow-lg"
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#" className="text-3xl font-bold text-white">
          Mominul Houqe
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="nav-item">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-white hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-white">
            {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-pink-800/90  flex flex-col items-center justify-center space-y-12 transform transition-all duration-500 ease-in-out ${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } md:hidden`}
        >
          {["About", "Skills", "Projects", "Contact"].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
              className={`text-3xl font-bold text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 ${
                menuOpen ? `animate-fadeIn animation-delay-${index * 100}` : ""
              }`}
            >
              {item}
            </a>
          ))}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors duration-300"
          >
            <XIcon size={32} />
          </button>
        </div>
      </nav>
    </header>
  );
}
