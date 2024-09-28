"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import InteractiveResume from "@/components/InteractiveResume";
import Blog from "@/components/Blogs";
import Achievements from "@/components/Achevement";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const appRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main page animation
      gsap.from("main > *", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "main",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={appRef}
      className=" bg-gradient-to-r text-white  from-gray-900 via-gray-700 to-gray-800"
    >
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <InteractiveResume />
        <Skills />
        <Projects />
        <Achievements />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}
