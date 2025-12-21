const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C++"],
    },
    {
      title: "Web Languages",
      skills: ["AdonisJS", "Node.js", "HTML", "Cascading Style Sheets", "JavaScript"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "Oracle DB", "ClickHouse", "Firebase"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "CI/CD", "Google Cloud Platform"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">What I work with</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Technologies</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-8 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gradient mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      style={{
                        animationDelay: `${(categoryIndex * 6 + skillIndex) * 0.05}s`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
