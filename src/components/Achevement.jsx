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
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".achievement", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const achievements = [
    {
      title: "Web Development Certification",
      issuer: "Programming Hero",
      year: 2023,
    },
    { title: "React Nanodegree", issuer: "Udacity", year: 2024 },
    { title: "Best Project Award", issuer: "Local Hackathon", year: 2023 },
  ];

  return (
    <section ref={sectionRef} className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Achievements & Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <Card key={index} className="achievement">
            <CardHeader>
              <CardTitle>{achievement.title}</CardTitle>
              <CardDescription>{achievement.issuer}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge>{achievement.year}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
