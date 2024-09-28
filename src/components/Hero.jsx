"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import image1 from "@/assests/momin.png"; // Ensure the image path is correct
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      })
        .from(
          ".hero-subtitle",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-cta",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .from(
          ".social-icon",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen flex flex-col md:flex-row gap-6 items-center justify-center text-center relative overflow-hidden"
    >
      {/* Background Floating Shapes */}
      <div className="absolute top-10 left-0 w-60 h-60 bg-gradient-to-tr from-pink-400 to-yellow-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-green-400 to-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <Image
        className="relative z-10 rounded-full border-4 border-white shadow-xl hover:shadow-2xl transition-shadow duration-500 w-80 h-80 mt-10 lg:w-[450px] lg:h-[450px]"
        src={image1}
        alt="Momin"
      />

      <div className="relative z-10 mt-6 md:mt-0">
        {/* Title */}
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 ease-in-out">
          MERN Stack Developer
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-2xl md:text-3xl lg:text-4xl mb-8 max-w-xl mx-auto text-white drop-shadow-md">
          Crafting dynamic web experiences with modern technologies
        </p>

        {/* Resume Button */}
        <div className="mx-auto">
          <Button
            className="bg-yellow-500 hover:bg-yellow-600 font-bold py-3 px-8 rounded-full text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
            asChild
          >
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center space-x-6">
            <Link
              href="https://github.com/mominulhouqe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon text-4xl cursor-pointer text-white hover:text-blue-400 transition-transform transform hover:rotate-12 hover:scale-110 duration-300 ease-in-out" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mominul-hoque-290340217/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon text-4xl cursor-pointer text-white hover:text-gray-400 transition-transform transform hover:rotate-12 hover:scale-110 duration-300 ease-in-out" />
            </Link>
            <Link
              href="https://x.com/momin7000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon text-4xl cursor-pointer text-white hover:text-blue-500 transition-transform transform hover:rotate-12 hover:scale-110 duration-300 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
