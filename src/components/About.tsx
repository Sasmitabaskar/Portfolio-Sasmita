import { Code2, Lightbulb, Rocket, Users, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code2, title: "Clean Code", description: "Readable, scalable, and production-ready." },
    { icon: Lightbulb, title: "Problem Solver", description: "Turning challenges into solutions." },
    { icon: Rocket, title: "Efficient Delivery", description: "Quality work, delivered on time." },
    { icon: Users, title: "Collaboration", description: "Strong team communication and ownership." },
  ];

  const skills = [
    { label: "Backend", value: "REST APIs, microservices, authentication, authorization, API security, third-party integrations" },
    { label: "Databases", value: "PostgreSQL, MySQL, ClickHouse, Redis, Firebase, BigQuery, with a focus on design and query optimization" },
    { label: "Cloud & DevOps", value: "Google Cloud Run, Cloud Build, Docker, CI/CD pipelines, cloud-native deployment" },
    { label: "Messaging", value: "RabbitMQ, Google Cloud Pub/Sub, event-driven architecture" },
    { label: "AI & Automation", value: "OpenAI and Anthropic APIs, prompt engineering, AI-powered developer and operations tools" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
          </div>

          {/* Main content card */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-8 md:p-10 mb-12 shadow-lg transition-all duration-300 hover:border-primary/40 hover:shadow-primary/10 animate-fade-up">
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />

            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a <span className="text-foreground font-semibold">Software Developer</span> passionate
                about building scalable, secure, and reliable software that solves real-world problems.
                With hands-on experience in backend development, cloud technologies, API engineering, and
                database optimization, I enjoy turning ideas into efficient, maintainable applications.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                At <span className="text-foreground font-semibold">NGP WebSmart Private Limited</span>, I
                develop and maintain production-grade backend systems, RESTful APIs, and cloud-based
                applications using{" "}
                <span className="text-primary font-semibold">
                  JavaScript, TypeScript, Node.js, AdonisJS, Python, SQL databases, and Google Cloud Platform
                </span>
                . My work includes performance optimization, secure API development, automated deployment
                pipelines, production troubleshooting, and AI-assisted operational tools.
              </p>

              {/* Technical expertise: outlined rows */}
              <div className="grid md:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="rounded-r-lg border-l-4 border-primary/60 bg-primary/5 px-4 py-3 text-sm text-muted-foreground leading-relaxed transition-all duration-300 hover:translate-x-1 hover:border-primary hover:bg-primary/10"
                  >
                    <span className="block text-foreground font-semibold mb-1">{skill.label}</span>
                    {skill.value}
                  </div>
                ))}
              </div>

              {/* Education highlight box */}
              <div className="flex gap-4 rounded-xl border border-primary/30 bg-primary/5 p-5 transition-colors duration-300 hover:bg-primary/10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold">Integrated M.Sc. in Information Technology</span>,
                  College of Engineering, Guindy, Anna University. Gold Medalist and First Rank Holder with a
                  CGPA of <span className="text-primary font-semibold">8.92/10</span>. A strong base in data
                  structures, algorithms, database systems, and software engineering.
                </p>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Beyond work, I enjoy building projects that combine software engineering, cloud computing,
                and AI. I value clean code, thoughtful system design, ownership, and collaboration with
                engineering and product teams. Let's connect and build something meaningful together!
              </p>

              {/* Quick Stats: outlined boxes */}
              <div className="flex flex-wrap gap-4 pt-2">
                {[
                  { value: "1.5", label: "Years Experience" },
                  { value: "10+", label: "Projects Completed" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-[150px] rounded-xl border border-border px-6 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights: 4 boxes in one row */}
          {/* Highlights: connected timeline style */}
<div className="relative mt-4">
  {/* Horizontal connecting line (desktop) */}
  <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent lg:block" />
  {/* Vertical connecting line (mobile) */}
  <div className="absolute bottom-0 left-8 top-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent lg:hidden" />

  <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
    {highlights.map((item, index) => (
      <div
        key={item.title}
        className="group relative flex gap-5 animate-fade-up lg:flex-col lg:items-center lg:text-center"
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        {/* Icon node */}
        <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary/40 bg-background transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:shadow-glow">
          <item.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
          <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary font-mono text-[10px] font-bold text-primary-foreground">
            0{index + 1}
          </span>
        </div>

        {/* Text */}
        <div>
          <h3 className="mb-1 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
            {item.title}
          </h3>
          <p className="max-w-[220px] text-sm text-muted-foreground">{item.description}</p>
          <div className="mt-3 h-0.5 w-8 rounded-full bg-primary/40 transition-all duration-300 group-hover:w-16 group-hover:bg-primary lg:mx-auto" />
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default About;