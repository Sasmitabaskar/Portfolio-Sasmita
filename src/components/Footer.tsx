import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Sasmitabaskar", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sasmitabaskar/", label: "LinkedIn" },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sasmitaruth23@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  // Show the floating back-to-top button after scrolling down
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-background">
      {/* Glowing top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-6 pb-8 pt-16">
        <div className="mx-auto max-w-6xl">
          {/* Main grid */}
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <a href="#" className="text-2xl font-bold tracking-tight text-gradient">
                Sasmita Baskar
              </a>
              <p className="mt-1 font-mono text-sm text-primary">Backend Software Developer</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Building scalable, secure and reliable backend systems, APIs and cloud-native applications.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-medium text-foreground">Open to opportunities</span>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="mb-5 font-mono text-sm uppercase tracking-wider text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                    >
                      <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="mb-5 font-mono text-sm uppercase tracking-wider text-foreground">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full border border-white/30 text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/20 hover:text-white hover:shadow-glow"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      <link.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">Chennai, Tamil Nadu, India</p>
              <a
                href="mailto:sasmitaruth23@gmail.com"
                className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                sasmitaruth23@gmail.com
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Sasmita Baskar. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              Crafted with <Heart className="h-4 w-4 fill-primary text-primary animate-pulse" /> using React,
              TypeScript &amp; Tailwind
            </p>
          </div>
        </div>
      </div>

      {/* Floating back-to-top button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;