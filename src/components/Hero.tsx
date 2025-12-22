import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profileImg from "@/assets/Sasmita5.jpg";

const social = {
  icon: Mail,
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=sasmitaruth23@gmail.com",
  label: "Email",
};


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
      <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Photo Section */}
            <div className="relative animate-fade-in order-1 lg:order-2 flex-shrink-0">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-full blur-xl opacity-30 animate-pulse" />
              
              {/* Rotating gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full animate-spin-slow opacity-75" style={{ animationDuration: "8s" }} />
              
              {/* Photo container */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                {/* Replace this src with your photo URL */}
                <img
                  src={profileImg}
                  alt="Sasmita Baskar"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Floating decorative elements around photo */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-bounce shadow-glow" style={{ animationDelay: "0.5s" }} />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary/70 rounded-full animate-bounce shadow-glow" style={{ animationDelay: "1s" }} />
              <div className="absolute top-1/2 -right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card px-4 py-1.5 rounded-full border border-border shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-foreground">Open to work</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 flex-1">
              {/* Greeting */}
              <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in">
              Hi, I'm
              </p>

              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
                <span className="text-foreground">Sasmita Baskar</span>
              </h1>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <span className="text-gradient">Software Developer</span>
              </h2>

              {/* Description */}
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Passionate about building software that lasts, performs, and makes a difference - through thoughtful code and collaborative problem - solving.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <Button variant="hero" size="lg" asChild>
                  <a href="#projects">View My Work</a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-primary/10 transition-colors">
                  <a href="https://github.com/Sasmitabaskar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-primary/10 transition-colors">
                  <a href="https://www.linkedin.com/in/sasmitabaskar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary hover:bg-primary/10 transition-colors">
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
