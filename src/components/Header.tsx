import { useState, useEffect } from "react";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [progress, setProgress] = useState(0);

  // Scroll state + progress bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-border bg-background/70 py-0 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-transparent py-2"
        }`}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-fuchsia-400 to-primary shadow-glow transition-[width] duration-150"
          style={{ width: `${progress}%`, opacity: isScrolled ? 1 : 0 }}
        />

        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="group flex items-center gap-3" aria-label="Back to top">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-fuchsia-500 font-mono text-sm font-bold text-white shadow-glow transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                SB
              </span>
              <span className="hidden sm:block">
                <span className="block text-lg font-bold leading-tight text-foreground">
                  Sasmita <span className="text-gradient">Baskar</span>
                </span>
                <span className="block font-mono text-[10px] leading-tight text-muted-foreground">
                  Code with Purpose, Build with Vision
                </span>
              </span>
            </a>

            {/* Desktop Navigation: pill container */}
            <div className="hidden items-center gap-1 rounded-full border border-border bg-card/60 p-1.5 backdrop-blur-md md:flex">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-glow"
                        : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Right side: CTA + mobile button */}
            <div className="flex items-center gap-3">
              <Button variant="hero" size="sm" asChild className="group/btn hidden lg:inline-flex">
                <a href="#contact">
                  Let's Talk
                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-white/30 text-white hover:bg-primary/20 hover:text-white md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu (OUTSIDE the header so backdrop-blur doesn't trap it) */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 pt-24 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative flex h-full flex-col justify-between p-8 pb-28">
          <div className="space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group flex items-center gap-4 border-b border-border py-4 transition-all duration-500 ${
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${index * 70}ms` : "0ms" }}
                >
                  <span className="font-mono text-sm text-primary">0{index + 1}</span>
                  <span
                    className={`text-3xl font-bold transition-colors ${
                      isActive ? "text-gradient" : "text-foreground group-hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </span>
                  <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </a>
              );
            })}
          </div>

          <Button variant="hero" size="lg" asChild className="w-full">
            <a href="/Sasmita_Baskar_Resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;