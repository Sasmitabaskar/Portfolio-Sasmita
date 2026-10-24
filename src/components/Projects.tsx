import { useState } from "react";
import {
  Github,
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  ChevronDown,
  HeartPulse,
  ScanEye,
  Building2,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";
import { Button } from "./ui/button";

/* Tag chips: shows the first few, expands on click */
const TagChips = ({ tags, limit = 6 }: { tags: string[]; limit?: number }) => {
  const [open, setOpen] = useState(false);
  const visible = open ? tags : tags.slice(0, limit);
  const hidden = tags.length - limit;

  return (
    <div className="flex flex-wrap gap-2">
      {visible.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
        >
          {tag}
        </span>
      ))}
      {hidden > 0 && (
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-1 rounded-full border border-dashed border-primary/40 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
        >
          {open ? "Show less" : `+${hidden} more`}
          <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Digital Twin Model For Preventive Healthcare",
      short: "Digital Twin Healthcare",
      category: "Full-Stack · Healthcare · AI",
      icon: HeartPulse,
      description:
        "Digital Twin Model for Preventive Healthcare is an innovative healthcare web application that enables users to interact with digital body representations for identifying external skin conditions. It offers AI-powered symptom analysis, detailed health reports, and seamless appointment scheduling with doctors. Real-time messaging, audio/video consultations, and secure notifications enhance accessibility and overall healthcare management.",
      flow: ["Web Client", "Express API", "Firebase", "OpenAI GPT"],
      highlights: [
        "AI-powered symptom analysis",
        "Appointment scheduling with doctors",
        "Real-time messaging and video consults",
        "Secure notifications via Twilio",
      ],
      tags: [
        "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "Firebase",
        "Firebase Realtime Database", "Cloud Firestore", "Firebase Storage",
        "Google Cloud Platform", "OpenAI", "GPT-3.5 Turbo", "Twilio API", "Visual Studio Code",
      ],
      githubUrl:
        "https://github.com/Sasmitabaskar/Digital-Twin-Model-for-Preventive-Healthcare---Node.js-Project",
    },
    {
      title: "YOLO-V3 Object Detection System",
      short: "YOLOv3 Object Detection",
      category: "Computer Vision · Python",
      icon: ScanEye,
      description:
        "YOLO Object Detection System is a real-time computer vision solution that detects multiple objects in images and videos using the YOLO algorithm with high accuracy.",
      flow: ["Image / Video", "OpenCV", "YOLOv3 Model", "Detected Objects"],
      highlights: [
        "Real-time multi-object detection",
        "Works on images and videos",
        "High-accuracy YOLO algorithm",
      ],
      tags: ["Python", "YOLOv3", "Computer Vision", "NumPy", "OpenCV", "Google Colab"],
      githubUrl: "https://github.com/Sasmitabaskar/YOLOv3-Object-Detection-System",
    },
    {
      title: "Hostel Accommodation Efficiency Suite",
      short: "Hostel Management Suite",
      category: "Desktop App · Java · MySQL",
      icon: Building2,
      description:
        "Hostel Accommodation Efficiency Suite is a web-based application designed to simplify and optimize student hostel management within educational institutions. It streamlines admission processes, room and student management, and fee updates through a user-friendly interface. Key modules include authentication, student tracking, room management, and admission handling for efficient administration.",
      flow: ["Java Swing UI", "Business Logic", "JDBC", "MySQL"],
      highlights: [
        "Authentication module",
        "Student tracking and admissions",
        "Room management and fee updates",
      ],
      tags: ["Java", "Java Swing", "MySQL", "JDBC", "MySQL Connector", "NetBeans IDE"],
      githubUrl: "https://github.com/Sasmitabaskar/Hostel-Accommodation-Efficiency-Suite",
    },
    {
      title: "Machine Learning for Cardio Vascular Risk Prediction and Prevention",
      short: "Cardiovascular Risk Prediction",
      category: "Machine Learning · Python",
      icon: BrainCircuit,
      description:
        "A Python-based heart disease prediction project using Google Colab, leveraging machine learning for accurate cardiovascular risk assessment. Includes data preprocessing, model training, and evaluation to aid in risk prediction and prevention.",
      flow: ["Dataset", "Preprocessing", "Model Training", "Risk Prediction"],
      highlights: [
        "Data preprocessing pipeline",
        "Model training and evaluation",
        "Cardiovascular risk assessment",
      ],
      tags: ["Google Colab", "Python", "Machine Learning"],
      githubUrl:
        "https://github.com/Sasmitabaskar/Machine-Learning-for-Cardiovascular-Risk-Prediction-and-Prevention",
    },
  ];

  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section id="projects" className="relative overflow-hidden bg-background py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="mb-2 font-mono text-sm text-primary">My recent work</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Featured Projects</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            {/* Project list */}
            <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {projects.map((project, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={project.title}
                    onClick={() => setActive(index)}
                    className={`group relative flex shrink-0 items-center gap-4 overflow-hidden rounded-xl border px-5 py-4 text-left transition-all duration-300 lg:w-full ${
                      isActive
                        ? "border-primary/60 bg-primary/10 shadow-glow lg:translate-x-2"
                        : "border-border bg-card/40 hover:border-primary/30 hover:bg-primary/5"
                    }`}
                  >
                    {/* Active indicator bar */}
                    <span
                      className={`absolute left-0 top-0 h-full w-1 bg-primary transition-transform duration-300 ${
                        isActive ? "scale-y-100" : "scale-y-0"
                      }`}
                    />
                    <span
                      className={`font-mono text-2xl font-bold transition-colors ${
                        isActive ? "text-primary" : "text-primary/30"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <div className="whitespace-nowrap lg:whitespace-normal">
                      <p className={`font-semibold ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                        {project.short}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">{project.category}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detail panel (key replays the animation on change) */}
            <div
              key={active}
              className="animate-fade-up relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 shadow-card md:p-10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/40 to-transparent" />

              {/* Big faded icon */}
              <current.icon className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 text-primary/5" />

              {/* Header */}
              <div className="relative mb-6 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-primary/10">
                  <current.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-xs text-primary">{current.category}</p>
                  <h3 className="mt-1 text-2xl font-bold text-foreground md:text-3xl">{current.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="relative mb-8 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {current.description}
              </p>

              {/* Flow diagram */}
              <div className="relative mb-8">
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  System flow
                </p>
                <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
                  {current.flow.map((step, i) => (
                    <div key={step} className="flex flex-col items-center gap-2 sm:flex-1 sm:flex-row">
                      <div
                        className="animate-fade-up w-full flex-1 rounded-xl border border-primary/30 bg-background/60 px-3 py-3 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-glow"
                        style={{ animationDelay: `${i * 0.12}s` }}
                      >
                        <p className="font-mono text-[10px] text-primary/70">0{i + 1}</p>
                        <p className="text-sm font-medium text-foreground">{step}</p>
                      </div>
                      {i < current.flow.length - 1 && (
                        <>
                          <ArrowRight className="hidden h-4 w-4 shrink-0 animate-pulse text-primary sm:block" />
                          <ArrowDown className="h-4 w-4 shrink-0 animate-pulse text-primary sm:hidden" />
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="relative mb-8">
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Key features
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {current.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="relative mb-8">
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Tech stack
                </p>
                <TagChips tags={current.tags} />
              </div>

              {/* Actions */}
              <Button variant="hero" size="lg" asChild className="group/btn relative">
                <a href={current.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* View More Button */}
          <div className="mt-16 text-center">
            <Button variant="hero-outline" size="lg" asChild>
              <a href="https://github.com/Sasmitabaskar" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;