"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import image1 from "@/assests/momin.jpg"; // Ensure the image path is correct
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Button } from "./ui/button";

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
      className="h-screen flex items-center justify-center text-center relative overflow-hidden "
    >
      <div className="relative z-10 ">
        {/* Title */}
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600 ">
          MERN Stack Developer
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-2xl md:text-3xl lg:text-4xl mb-8 max-w-xl mx-auto ">
          Crafting dynamic web experiences with modern technologies
        </p>

        {/* Resume Button */}
        <div className="mx-auto">
          <Button
            className="bg-yellow-500 hover:bg-yellow-600  font-bold py-3 px-8 rounded-full  transition-transform transform hover:scale-105"
            asChild
          >
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center space-x-4">
            <FaLinkedin className="social-icon text-3xl cursor-pointer transition-transform transform hover:rotate-12 hover:scale-110" />
            <FaGithub className="social-icon text-3xl cursor-pointer transition-transform transform hover:rotate-12 hover:scale-110" />
            <FaTwitter className="social-icon text-3xl cursor-pointer transition-transform transform hover:rotate-12 hover:scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
}
