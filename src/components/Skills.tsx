import { useState } from "react";
import { Code2, Globe, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      folder: "languages",
      icon: Code2,
      skills: ["Java", "Python", "C++"],
    },
    {
      title: "Backend & Web",
      folder: "backend",
      icon: Globe,
      skills: ["AdonisJS", "Node.js", "Express.js", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Databases",
      folder: "databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "Oracle DB", "ClickHouse", "Firebase"],
    },
    {
      title: "Tools & Cloud",
      folder: "tools",
      icon: Wrench,
      skills: [
        "Git",
        "Docker",
        "CI/CD",
        "Google Cloud Run",
        "Google Cloud Build",
        "Cloud Build Triggers",
        "API Gateway",
        "OpenAI APIs",
        "JavaScript Libraries",
        "SVG",
        "Object-Oriented Programming",
        "Software Engineering Principles",
        "DBMS",
      ],
    },
  ];

  const [active, setActive] = useState(0);
  const current = skillCategories[active];

  // All skills for the marquee
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <section id="skills" className="relative overflow-hidden bg-card py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="mb-2 font-mono text-sm text-primary">What I work with</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Skills & Technologies</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Category tabs */}
            <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {skillCategories.map((cat, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={cat.title}
                    onClick={() => setActive(index)}
                    className={`group flex shrink-0 items-center gap-3 rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-primary/60 bg-primary/10 shadow-glow lg:translate-x-2"
                        : "border-border bg-background/40 hover:border-primary/30 hover:bg-primary/5"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                        isActive ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <div className="whitespace-nowrap">
                      <p className={`font-semibold ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                        {cat.title}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {cat.skills.length} skills
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Terminal-style panel */}
            <div className="overflow-hidden rounded-2xl border border-border bg-background/60 shadow-lg backdrop-blur">
              {/* Window bar */}
              <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  ~/skills/{current.folder}
                </span>
              </div>

              {/* Skills (key forces the animation to replay on tab change) */}
              <div key={active} className="min-h-[260px] p-6 md:p-8">
                <p className="mb-6 font-mono text-sm text-primary">
                  <span className="text-muted-foreground">$</span> ls {current.folder}/
                </p>

                <div className="flex flex-wrap gap-3">
                  {current.skills.map((skill, i) => (
                    <span
                      key={skill}
                      className="animate-fade-up cursor-default rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 font-mono text-sm text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/15 hover:text-primary hover:shadow-glow"
                      style={{ animationDelay: `${i * 0.06}s` }}
                    >
                      <span className="mr-2 text-primary">▹</span>
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="mt-8 font-mono text-sm text-muted-foreground">
                  <span className="text-primary">✓</span> {current.skills.length} items loaded
                  <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-primary" />
                </p>
              </div>
            </div>
          </div>

          {/* Marquee strip */}
          {/* <div
            className="group mt-16 overflow-hidden"
            style={{
              maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
              {[...allSkills, ...allSkills].map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="whitespace-nowrap rounded-full border border-border bg-background/50 px-5 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;