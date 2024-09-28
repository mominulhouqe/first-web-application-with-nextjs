"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20">
      <div className="about-content">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-xl mb-6">
          I am a passionate MERN stack developer with a keen eye for creating
          seamless, user-centric web applications. With expertise in MongoDB,
          Express.js, React, and Node.js, I bring ideas to life through clean,
          efficient code and intuitive user interfaces.
        </p>
        <p className="text-xl">
          When I m not coding, you can find me exploring new technologies,
          contributing to open-source projects, or sharing my knowledge through
          tech blogs and community meetups.
        </p>
      </div>
    </section>
  );
}
