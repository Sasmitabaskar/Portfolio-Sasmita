import { useState } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar, ChevronDown } from "lucide-react";

/* Skill chips: shows the first few, expands on click */
const SkillChips = ({ skills, limit = 6 }: { skills: string[]; limit?: number }) => {
  const [open, setOpen] = useState(false);
  const visible = open ? skills : skills.slice(0, limit);
  const hidden = skills.length - limit;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {visible.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
        >
          {skill}
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

const Experience = () => {
  // ⬇️ Keep your existing workExperience array here (unchanged)
   const workExperience = [
    {
      company: "NGP Websmart Pvt.Ltd.",
      location: "Chennai, Tamil Nadu, India · On-site",
      roles: [
        {
          title: "Software Developer",
          type: "Full-time",
          duration: "May 2025 - Present · 7 mos",
          description: "Designed and developed scalable RESTful APIs using AdonisJS and led the implementation of new features across various backend modules. Built, containerized, and deployed microservices on Google Cloud Run, implemented CI/CD pipelines via Cloud Build for automated deployments. Troubleshot and resolved production-level bugs, optimized database queries and API response times to enhance system performance. Worked closely with frontend developers, QA engineers to refine features, actively involved in code reviews to ensure smooth delivery cycles.",
          skills: [
            "Linux",
            "AdonisJS",
            "RESTful APIs",
            "JavaScript",
            "Exception handling",
            "Bitbucket",
            "Google Cloud Platform (GCP)",
            "PostgreSQL",
            "ClickHouse",
            "Mailgun",
            "Slack Incoming Webhooks",
            "Google Cloud Run",
            "Cloud Build",
            "Algorithm Development",
            "RabbitMQ"
          ]
        },
        {
          title: "Software Developer",
          type: "Internship",
          duration: "Jan 2025 - May 2025 · 5 mos",
          skills: ["Database Management Systems", "Linux Fundamentals - Git(DevOps)", "TypeScript", "Vue.js", "JavaScript", "AdonisJS"],
        },
      ],
    },
    {
      company: "DeepVital Private Limited",
      location: "Chennai · On-site",
      roles: [
        {
          title: "Database Engineer",
          type: "Internship",
          duration: "Jun 2023 - Nov 2023 · 6 mos",
          description:
            "Learned and developed practical skills by acquiring knowledge on Database. Worked on a real-time healthcare project and gained experience with programming languages such as JavaScript, NodeJS, ExpressJS.",
          skills: [
              "Database Management System (DBMS)",
              "Full-Stack Development",
              "NoSQL",
              "Google Cloud Platform (GCP)",
              "Scalable Vector Graphics (SVG)",
              "Back-End Web Development",
              "User Interface Prototyping",
              "No-Code Development",
              "OpenAI APIs",
              "Firebase",
              "Node.js",
              "Microsoft Visual Studio Code",
              "JavaScript",
              "JavaScript Libraries",
              "Bubble.io",
              "Cascading Style Sheets (CSS)",
              "Database Design",
            ],              
        },
      ],
    },
  ];

  const education = [
    {
      institution: "College of Engineering, Guindy, Anna University",
      degree: "Master's Degree - M.Sc. Integrated IT",
      duration: "2020 - 2025",
      description:
        "Built a strong foundation in software engineering and IT principles, gaining hands-on experience in both theoretical and practical aspects. Strengthened my understanding of software development life cycle, database systems, and problem-solving through algorithm design.",
      skills: [
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Design and Analysis of Algorithms",
        "Software Engineering Principles",
        "Data Structures",
        "Object-Oriented Programming",
        "Networking Fundamentals",
      ],
    },
  ];

  return (
    <section id="experience" className="relative overflow-hidden bg-background py-24">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="mb-2 font-mono text-sm text-primary">My journey</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Experience</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
          </div>

          {/* ================= WORK EXPERIENCE ================= */}
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-3">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Work Experience</h3>
          </div>

          <div className="relative mb-20 pl-10 md:pl-14">
            {/* Glowing vertical line */}
            <div className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent md:left-[19px]" />

            <div className="space-y-10">
              {workExperience.map((job, index) => (
                <div
                  key={job.company}
                  className="group relative animate-fade-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline node */}
                  <div className="absolute -left-10 top-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow md:-left-14 md:h-10 md:w-10">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>

                  {/* Company card */}
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow md:p-8">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/40 to-transparent" />

                    <h4 className="text-xl font-semibold text-foreground">{job.company}</h4>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{job.location}</span>
                    </div>

                    {/* Roles */}
                    <div className="relative mt-6 space-y-6 border-l border-primary/20 pl-6">
                      {job.roles.map((role, roleIndex) => {
                        const isCurrent = role.duration.includes("Present");
                        return (
                          <div key={roleIndex} className="relative">
                            {/* Role dot */}
                            <span className="absolute -left-[31px] top-1.5 flex h-3 w-3">
                              {isCurrent && (
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                              )}
                              <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-background bg-primary" />
                            </span>

                            <div className="flex flex-wrap items-center gap-2">
                              <h5 className="text-lg font-medium text-foreground">{role.title}</h5>
                              <span className="rounded-full border border-primary/40 px-2.5 py-0.5 text-xs text-primary">
                                {role.type}
                              </span>
                              {isCurrent && (
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
                                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                                  Current
                                </span>
                              )}
                            </div>

                            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{role.duration}</span>
                            </div>

                            {role.description && (
                              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                {role.description}
                              </p>
                            )}

                            <SkillChips skills={role.skills} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= EDUCATION ================= */}
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-3">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Education</h3>
          </div>

          <div className="relative pl-10 md:pl-14">
            <div className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent md:left-[19px]" />

            <div className="space-y-10">
              {education.map((edu) => (
                <div key={edu.institution} className="group relative animate-fade-up">
                  <div className="absolute -left-10 top-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow md:-left-14 md:h-10 md:w-10">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow md:p-8">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/40 to-transparent" />

                    <h4 className="text-xl font-semibold text-foreground">{edu.institution}</h4>
                    <p className="mt-1 font-medium text-primary">{edu.degree}</p>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.duration}</span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{edu.description}</p>

                    <SkillChips skills={edu.skills} limit={5} />
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

export default Experience;