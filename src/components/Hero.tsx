import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin, Cloud, Database, Terminal, Braces, Server, Container, Boxes } from "lucide-react";
import { Button } from "./ui/button";
import profileImg from "@/assets/SasmitaBaskar1.jpg";

const social = {
  icon: Mail,
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=sasmitaruth23@gmail.com",
  label: "Email",
};

const orbitSkills = [
  { label: "Node.js",    icon: Terminal,  left: 50,   top: -14,  delay: "0s" },
  { label: "TypeScript", icon: Braces,    left: 95.3, top: 4.7,  delay: "0.8s" },
  { label: "AdonisJS",   icon: Server,    left: 114,  top: 50,   delay: "1.6s" },
  { label: "ClickHouse", icon: Cloud,     left: 95.3, top: 95.3, delay: "2.4s" },
  { label: "Docker",     icon: Container, left: 4.7,  top: 95.3, delay: "3.2s" },
  { label: "PostgreSQL", icon: Database,  left: -14,  top: 50,   delay: "4s" },
  { label: "RabbitMQ",   icon: Boxes,     left: 4.7,  top: 4.7,  delay: "4.8s" },
];

const roles = [
  "Backend Developer",
  "API Engineer",
  "Cloud & GCP Enthusiast",
  "AI-Powered Tools Builder",
];

const techStack = ["Node.js", "TypeScript", "AdonisJS", "Python", "PostgreSQL", "GCP", "Docker"];

const stats = [
  { value: "8.92", label: "CGPA" },
  { value: "10+", label: "Projects" },
  { value: "1.5", label: "Year Exp." },
];

const Hero = () => {
  // Typewriter effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let delay = deleting ? 40 : 80;
    if (!deleting && text === current) delay = 1500;
    else if (deleting && text === "") delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === current) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground) / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-3xl" />
        {/* Particles */}
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            {/* Photo Section */}
            {/* Photo Section */}
            <div className="relative animate-fade-in order-1 lg:order-2 flex-shrink-0 lg:mr-24">
              {/* Outer glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary via-cyan-400/60 to-primary rounded-full blur-2xl opacity-30 animate-pulse" />

              {/* Rotating gradient border */}
              <div
                className="absolute -inset-1.5 bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full animate-spin-slow opacity-80"
                style={{ animationDuration: "8s" }}
              />

              {/* Dashed orbit ring */}
              <div className="absolute -inset-8 rounded-full border border-dashed border-primary/30 animate-spin-slow hidden md:block" style={{ animationDuration: "30s" }} />

              {/* Photo container (centered + zoomed) */}
              <div className="group relative w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={profileImg}
                  alt="Sasmita Baskar"
                  className="w-full h-full object-cover object-center scale-125 transition-transform duration-500 group-hover:scale-150"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Floating tech chips (desktop only) */}
              {orbitSkills.map((skill) => (
              <div
                key={skill.label}
                className="absolute z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block"
                style={{ left: `${skill.left}%`, top: `${skill.top}%` }}
              >
                {/* Inner wrapper floats, so it doesn't fight the centering transform */}
                <div
                  className="group/chip flex animate-float items-center gap-2 whitespace-nowrap rounded-xl border border-primary/30 bg-card/80 px-3 py-2 shadow-lg backdrop-blur transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-glow"
                  style={{ animationDelay: skill.delay }}
                >
                  <skill.icon className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">{skill.label}</span>
                </div>
              </div>
            ))}
              <div
                className="hidden md:flex absolute -right-12 top-1/3 items-center gap-2 rounded-xl border border-border bg-card/80 backdrop-blur px-3 py-2 shadow-lg animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <Cloud className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-foreground">GCP</span>
              </div>
              <div
                className="hidden md:flex absolute -left-6 bottom-12 items-center gap-2 rounded-xl border border-border bg-card/80 backdrop-blur px-3 py-2 shadow-lg animate-float"
                style={{ animationDelay: "3s" }}
              >
                <Database className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-foreground">PostgreSQL</span>
              </div>

              {/* Small accents */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-bounce shadow-glow" style={{ animationDelay: "0.5s" }} />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary/70 rounded-full animate-bounce shadow-glow" style={{ animationDelay: "1s" }} />

              {/* Status badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card px-4 py-1.5 rounded-full border border-border shadow-lg whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-xs font-medium text-foreground">Open to work</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 flex-1">
              {/* Location pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6 animate-fade-in">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span className="text-primary font-mono text-xs md:text-sm">Hi, I'm available for opportunities</span>
              </div>

              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 animate-slide-up tracking-tight">
                <span className="text-foreground">Sasmita</span>{" "}
                <span className="text-gradient">Baskar</span>
              </h1>

              {/* Typewriter title */}
              <h2
                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 animate-slide-up h-10 flex items-center justify-center lg:justify-start font-mono"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="text-primary mr-2">{">"}</span>
                <span className="text-foreground">{text}</span>
                <span className="ml-0.5 inline-block w-0.5 h-7 bg-primary animate-pulse" />
              </h2>

              {/* Description */}
              <p
                className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-6 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Backend developer turning complex requirements into robust, well-tested software.
              </p>

              {/* Tech stack chips */}
              <div
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 animate-slide-up"
                style={{ animationDelay: "0.25s" }}
              >
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-md hover:shadow-primary/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Button variant="hero" size="lg" asChild>
                  <a href="#projects">View My Work</a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
                {/* Optional: put your resume in /public and keep this button */}
                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className="text-white hover:text-white hover:bg-primary/20"
                >
                  <a href="/resume.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>

              {/* Stats + Social */}
              <div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                {/* Social Links */}
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full border border-white/30 text-white hover:border-primary/60 hover:text-white hover:bg-primary/20 hover:-translate-y-1 transition-all duration-300"
                  >
                    <a href="https://github.com/Sasmitabaskar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full border border-white/30 text-white hover:border-primary/60 hover:text-white hover:bg-primary/20 hover:-translate-y-1 transition-all duration-300"
                  >
                    <a href="https://www.linkedin.com/in/sasmitabaskar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full border border-white/30 text-white hover:border-primary/60 hover:text-white hover:bg-primary/20 hover:-translate-y-1 transition-all duration-300"
                  >
                    <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
              </div>

                <div className="hidden sm:block h-10 w-px bg-border" />

                {/* Stats */}
                <div className="flex gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center lg:text-left">
                      <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                      <p className="text-muted-foreground text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-xs font-mono">Scroll</span>
        <div className="flex h-9 w-5 justify-center rounded-full border-2 border-current pt-1.5">
          <span className="h-2 w-1 rounded-full bg-current animate-bounce" />
        </div>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;