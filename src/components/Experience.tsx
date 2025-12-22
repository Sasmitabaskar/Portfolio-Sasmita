import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const Experience = () => {
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
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-card border border-border">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Work Experience</h3>
              </div>

              <div className="space-y-6">
                {workExperience.map((job, index) => (
                  <div
                    key={job.company}
                    className="relative pl-8 before:absolute before:left-[11px] before:top-8 before:bottom-0 before:w-[2px] before:bg-border last:before:hidden"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-card border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    <div className="bg-gradient-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
                      <h4 className="text-lg font-semibold text-foreground mb-1">{job.company}</h4>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>

                      <div className="space-y-4">
                        {job.roles.map((role, roleIndex) => (
                          <div
                            key={roleIndex}
                            className="border-l-2 border-primary/30 pl-4 py-2"
                          >
                            <div className="flex items-start justify-between gap-2 flex-wrap">
                              <div>
                                <h5 className="font-medium text-foreground">{role.title}</h5>
                                <span className="text-sm text-primary">{role.type}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                              <Calendar className="w-4 h-4" />
                              <span>{role.duration}</span>
                            </div>
                            {role.description && (
                              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                                {role.description}
                              </p>
                            )}
                            <div className="flex flex-wrap gap-2 mt-3">
                              {role.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
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
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-card border border-border">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.institution} className="relative pl-8">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-card border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    <div className="bg-gradient-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
                      <h4 className="text-lg font-semibold text-foreground mb-1">{edu.institution}</h4>
                      <p className="text-primary font-medium mb-2">{edu.degree}</p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;