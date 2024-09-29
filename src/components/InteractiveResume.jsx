import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function InteractiveResume() {
  const [activeTab, setActiveTab] = useState("experience");

  const resumeData = {
    experience: [
      {
        title: "Frontend Developer",
        company: "GAO Tek Inc.",
        period: "July 2023 – September 2023",
        description:
          "Led the redesign and enhancement of the Admin dashboard, with a particular focus on improving the user interface and implementing APIs for key sections such as Post-Report, Video-Report, LiveStreaming Report, and User-Report.",
      },
      {
        title: "Web Designer",
        company: "Tuntuni Dev",
        period: "December 2023 – February 2024",
        description:
          "During my tenure at Tuntuni Dev , I served as a full-time Web Designer. My role involved leading the redesign of the Admin dashboard to enhance usability and user interface.",
      },
    ],
    education: [
      {
        degree: "Diploma in Computer Science and Technology",
        school: "Moulvibazar Polytechnic Institute,",
        year: "2023",
      },
    ],
    skills: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
    ],
  };

  return (
    <div className={`py-16 px-6 `}>
      <h2 className="text-3xl font-bold mb-8 text-center">
        Interactive Resume
      </h2>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          {resumeData.experience.map((job, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>
                  {job.company} | {job.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="education">
          {resumeData.education.map((edu, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>
                  {edu.school} | {edu.year}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="skills">
          <Card>
            <CardContent className="pt-6">
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {resumeData.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-white rounded-md p-2 text-center"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
