"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

// Replace with actual data
const projects = [
  {
    id: "1",
    title: "Pro Career - Job Portal Website",
    description:
      "A comprehensive job portal with features for job posting, candidate management, and application tracking. Includes real-time analytics for informed decision-making.",
    image: "https://i.ibb.co/VLZ9fjP/proCarer.png",
    demo: "https://pro-career-phi.vercel.app/",
    github: "https://github.com/yourusername/pro-career",
    technologies: ["Node.js", "Express", "React", "MongoDB"],
  },
  {
    id: "2",
    title: "Islamic Library & Coaching Center",
    description:
      "An all-in-one platform for Islamic education, featuring a digital library and coaching center management system. Streamlines operations with advanced user and content management.",
    image:
      "https://i.ibb.co/tHgjBQb/Screenshot-Capture-2024-09-28-16-05-23.png",
    demo: "https://giyanudoye.web.app/",
    github: "https://github.com/yourusername/islamic-library",
    technologies: ["Next.js", "Tailwind CSS", "Ant Design", "Framer Motion"],
  },
  {
    id: "3",
    title: "Write Your Thoughts",
    description:
      "A dynamic social media platform for sharing thoughts, engaging with content, and building communities. Features robust admin tools for content moderation.",
    image: "https://i.ibb.co/0BHc7Pj/social-app.png",
    demo: "https://writeyour-thought.web.app/",
    github: "https://github.com/yourusername/write-your-thoughts",
    technologies: ["React", "Firebase", "Node.js", "Express"],
  },
  {
    id: "4",
    title: "Event Launchpad",
    description:
      "A cutting-edge platform for seamless event planning and management. Simplifies the process of organizing conferences, workshops, and networking events.",
    image:
      "https://i.ibb.co/j3YxfPP/Screenshot-Capture-2024-09-28-16-16-34.png",
    demo: "https://event-launchpad.vercel.app/",
    github: "https://github.com/yourusername/event-launchpad",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
  {
    id: "5",
    title: "Qubly",
    description:
      "An intuitive task management solution designed to boost productivity and streamline workflows for individuals and teams.",
    image:
      "https://i.ibb.co/xJXz3Hq/Screenshot-Capture-2024-09-28-16-18-49.png",
    demo: "https://task-qubly.vercel.app/",
    github: "https://github.com/yourusername/qubly",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
  },
];

export default function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.utils.toArray(".project-card").forEach((card, index) => {
          gsap.from(card, {
            y: 100,
            opacity: 0.2,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              end: "bottom center",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.2, // Stagger effect
          });

          // Add hover animation
          card.addEventListener("mouseenter", () =>
            gsap.to(card, { scale: 1.05, duration: 0.3 })
          );
          card.addEventListener("mouseleave", () =>
            gsap.to(card, { scale: 1, duration: 0.3 })
          );
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray(".project-card").forEach((card) => {
          gsap.set(card, { clearProps: "all" });
        });
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="py-6 md:py-20">
      <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Featured Projects
      </h2>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <div className="relative">
              <Image
                width={500}
                height={300}
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <FaExternalLinkAlt className="mr-2" /> Demo
                      </Button>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <FaGithub className="mr-2 text-white" /> GitHub
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
