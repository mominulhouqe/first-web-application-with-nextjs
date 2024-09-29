"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-form", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={contactRef} className="py-20">
      <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-200">
        Get in Touch
      </h2>
      <form className="contact-form max-w-lg mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-2xl backdrop-blur-md">
        <div className="mb-6 relative">
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 text-pink-200"
          >
            Name
          </label>
          <div className="flex items-center">
            <FiUser className="absolute left-3 text-pink-300" />
            <input
              type="text"
              id="name"
              name="name"
              className="w-full pl-10 pr-3 py-2 bg-transparent border-b-2 border-pink-300 focus:border-yellow-300 text-white placeholder-pink-200 outline-none transition-all"
              required
              placeholder="Your Name"
            />
          </div>
        </div>
        <div className="mb-6 relative">
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 text-pink-200"
          >
            Email
          </label>
          <div className="flex items-center">
            <FiMail className="absolute left-3 text-pink-300" />
            <input
              type="email"
              id="email"
              name="email"
              className="w-full pl-10 pr-3 py-2 bg-transparent border-b-2 border-pink-300 focus:border-yellow-300 text-white placeholder-pink-200 outline-none transition-all"
              required
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div className="mb-6 relative">
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-pink-200"
          >
            Message
          </label>
          <div className="flex items-start">
            <FiMessageSquare className="absolute left-3 top-3 text-pink-300" />
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full pl-10 pr-3 py-2 bg-transparent border-2 border-pink-300 focus:border-yellow-300 rounded-md text-white placeholder-pink-200 outline-none transition-all resize-none"
              required
              placeholder="Your message here..."
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          <FiSend className="mr-2" />
          Send Message
        </button>
      </form>
    </section>
  );
}
