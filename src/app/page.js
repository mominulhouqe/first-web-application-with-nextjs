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
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const appRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main page animation
      gsap.from("main > *", {
        y: 50,
        opacity: 0.9,
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
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden"
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
      <Footer />
    </div>
  );
}
