import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sasmitabaskar", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sasmitabaskar/", label: "LinkedIn" },
    {
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=sasmitaruth23@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo/Name */}
            <div>
              <a href="#" className="text-xl font-bold text-gradient">
                Sasmita's Portfolio
              </a>
              <p className="text-muted-foreground text-sm mt-1">
                Aspiring Software Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
