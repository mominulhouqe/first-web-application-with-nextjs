"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "HTML5",
  "CSS3",
  "TailwindCSS",
  "TypeScript",
  "Redux",
  "MongoDB",
  "Webpack",
  "Git",
  "Github",
];

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-item", {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
      <div className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="skill-item bg-gray-400 text-white rounded-lg p-4 text-center"
          >
            <span className="text-lg font-semibold">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
