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
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
      <div className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="skill-item bg-white text-black rounded-lg p-4 text-center"
          >
            <span className="text-lg font-semibold">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
