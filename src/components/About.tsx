import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code2, title: "Clean Code", description: "Readable, scalable, and production-ready." },
    { icon: Lightbulb, title: "Problem Solver", description: "Turning challenges into solutions." },
    { icon: Rocket, title: "Efficient Delivery", description: "Quality work, delivered on time." },
    { icon: Users, title: "Collaboration", description: "Strong team communication and ownership." },
  ];
  

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Driven by curiosity and a passion for software development, I enjoy transforming ideas into scalable, real-world solutions. My academic foundation from <span className="text-foreground font-semibold">Anna University</span> strengthened my understanding of software engineering fundamentals.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As a <span className="text-foreground font-semibold">Software Developer</span> at <span className="text-foreground font-semibold">NGP Websmart Private Limited</span>, I’ve grown by learning new technologies from the ground up and building clean, reliable applications.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I focus on thoughtful code, collaboration, and continuous learning to deliver meaningful software solutions.
            </p>

              {/* Quick Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-gradient">1</p>
                  <p className="text-muted-foreground text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient">7+</p>
                  <p className="text-muted-foreground text-sm">Projects Completed</p>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
