import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import DigitalTwin from "@/assets/DigitalTwin.jpg";
import Yolo from "@/assets/Yolo.avif";
import Java from "@/assets/Java.jpg";
import ML from "@/assets/ML.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Digital Twin Model For Preventive Healthcare",
      description: "Digital Twin Model for Preventive Healthcare is an innovative healthcare web application that enables users to interact with digital body representations for identifying external skin conditions. It offers AI-powered symptom analysis, detailed health reports, and seamless appointment scheduling with doctors. Real-time messaging, audio/video consultations, and secure notifications enhance accessibility and overall healthcare management.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "Firebase",
        "Firebase Realtime Database",
        "Cloud Firestore",
        "Firebase Storage",
        "Google Cloud Platform",
        "OpenAI",
        "GPT-3.5 Turbo",
        "Twilio API",
        "Visual Studio Code",
      ],      
      githubUrl: "https://github.com/Sasmitabaskar/Digital-Twin-Model-for-Preventive-Healthcare---Node.js-Project",
      image: DigitalTwin,
    },
    {
      title: "YOLO-V3 Object Detection System",
      description: "YOLO Object Detection System is a real-time computer vision solution that detects multiple objects in images and videos using the YOLO algorithm with high accuracy.",
      tags: [
        "Python",
        "YOLOv3",
        "Computer Vision",
        "NumPy",
        "OpenCV",
        "Google Colab",
      ],
      githubUrl: "https://github.com/Sasmitabaskar/YOLOv3-Object-Detection-System",
      image: Yolo,
    },
    {
      title: "Hostel Accommodation Efficiency Suite",
      description: "Hostel Accommodation Efficiency Suite is a web-based application designed to simplify and optimize student hostel management within educational institutions. It streamlines admission processes, room and student management, and fee updates through a user-friendly interface. Key modules include authentication, student tracking, room management, and admission handling for efficient administration.",
      tags: [
        "Java",
        "Java Swing",
        "MySQL",
        "JDBC",
        "MySQL Connector",
        "NetBeans IDE",
      ],
      githubUrl: "https://github.com/Sasmitabaskar/Hostel-Accommodation-Efficiency-Suite",
      image: Java,
    },
    {
      title: "Machine Learning for Cardio Vascular Risk Prediction and Prevention",
      description: "A Python-based heart disease prediction project using Google Colab, leveraging machine learning for accurate cardiovascular risk assessment. Includes data preprocessing, model training, and evaluation to aid in risk prediction and prevention.",
      tags: [
        "Google Colab",
        "Python",
        "Machine Learning",
      ],
      githubUrl: "https://github.com/Sasmitabaskar/Machine-Learning-for-Cardiovascular-Risk-Prediction-and-Prevention",
      image: ML,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My recent work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group rounded-xl overflow-hidden bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button variant="hero-outline" size="icon" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View code">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="hero-outline" size="lg" asChild>
              <a href="https://github.com/Sasmitabaskar" target="_blank" rel="noopener noreferrer">
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
