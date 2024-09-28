"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Replace with actual data
const projects = [
  {
    id: "1",
    title: "Pro Career - Job Portal Website",
    description:
      "A job portal website with features such as job posting, candidate profile management, and application tracking. Includes real-time analytics. Built with Node.js, Express, and modern frontend technologies.",
    image: "https://i.ibb.co/VLZ9fjP/proCarer.png",
    demo: "https://pro-career-phi.vercel.app/",
  },
  {
    id: "2",
    title: "Islamic Library with Coaching Center Management",
    description:
      "A comprehensive Islamic Library and Coaching Center management system using Next.js, Tailwind CSS, Ant Design, and Framer Motion. Features include book management, user management, coaching classes, tutor and student management, and an admin dashboard for streamlined operations.",
    image:
      "https://i.ibb.co/tHgjBQb/Screenshot-Capture-2024-09-28-16-05-23.png",
    demo: "https://giyanudoye.web.app/",
  },
  {
    id: "3",
    title: "Write Your Thoughts",
    description:
      "A social media platform for posting thoughts, commenting, liking, sharing, and managing profiles. Includes an admin dashboard for overseeing user activity. Built with modern technologies.",
    image: "https://i.ibb.co/0BHc7Pj/social-app.png",
    demo: "https://writeyour-thought.web.app/",
  },

  {
    id: "4",
    title: "Event Launchpad",
    description:
      "A platform for launching and managing conferences and events.",
    image:
      "https://i.ibb.co/j3YxfPP/Screenshot-Capture-2024-09-28-16-16-34.png",
    demo: "https://event-launchpad.vercel.app/",
  },
  {
    id: "5",
    title: "Qubly",
    description: "A task management platform designed to enhance productivity.",
    image:
      "https://i.ibb.co/xJXz3Hq/Screenshot-Capture-2024-09-28-16-18-49.png",
    demo: "https://task-qubly.vercel.app/",
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
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
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
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-500 mt-4 inline-block"
                >
                  View Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
