"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack MERN application with real-time updates and payment integration.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Task Management App",
    description:
      "A React-based application with drag-and-drop functionality and team collaboration features.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard built with Node.js and Express, featuring real-time data visualization.",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-gray-800 rounded-lg overflow-hidden"
          >
            <Image
              width={500}
              height={500}
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
