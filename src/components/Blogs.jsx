"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    excerpt:
      "Closures are a powerful feature in JavaScript that allow you to create functions with private variables. In this blog post, we explore how closures work and provide examples of their use cases.",
    date: new Date(2024, 8, 1), // September 1, 2024
  },
  {
    id: 2,
    title: "10 Tips for Responsive Web Design",
    excerpt:
      "Responsive web design is essential for creating websites that look great on any device. In this article, we share 10 tips to help you achieve a responsive layout.",
    date: new Date(2024, 8, 15), // September 15, 2024
  },
  {
    id: 3,
    title: "A Guide to CSS Flexbox",
    excerpt:
      "CSS Flexbox is a layout module that makes it easier to design flexible and responsive layout structures. This guide covers the basics and advanced techniques to use Flexbox effectively.",
    date: new Date(2024, 8, 20), // September 20, 2024
  },
  {
    id: 4,
    title: "Building a RESTful API with Node.js",
    excerpt:
      "In this post, we walk through the process of building a RESTful API using Node.js and Express. We'll cover routes, controllers, and how to connect to a MongoDB database.",
    date: new Date(2024, 8, 25), // September 25, 2024
  },
  {
    id: 5,
    title: "Getting Started with React Hooks",
    excerpt:
      "React Hooks allow you to use state and other React features without writing a class. This post introduces the basics of hooks and how to use them in your React applications.",
    date: new Date(2024, 8, 28), // September 28, 2024
  },
  {
    id: 6,
    title: "The Importance of SEO in Web Development",
    excerpt:
      "Search Engine Optimization (SEO) is crucial for ensuring your website is discoverable by search engines. This article discusses best practices for optimizing your website for search.",
    date: new Date(2024, 8, 30), // September 30, 2024
  },
];

export default function Blog() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-post", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="blog-post">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>
                Posted on {post.date.toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-primary hover:underline"
              >
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
