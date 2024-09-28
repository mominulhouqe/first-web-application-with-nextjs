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
        title: "Senior Developer",
        company: "Tech Co",
        period: "2020 - Present",
        description: "Led team in developing...",
      },
      {
        title: "Web Developer",
        company: "StartUp Inc",
        period: "2018 - 2020",
        description: "Developed and maintained...",
      },
    ],
    education: [
      {
        degree: "M.S. Computer Science",
        school: "Tech University",
        year: "2018",
      },
      {
        degree: "B.S. Computer Science",
        school: "State College",
        year: "2016",
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Git"],
  };

  return (
    <div className="py-16 px-6">
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
                    className="bg-muted rounded-md p-2 text-center"
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
