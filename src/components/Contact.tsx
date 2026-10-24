import { useState } from "react";
import { Mail, MapPin, Phone, Copy, Check, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const EMAIL = "sasmitaruth23@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: ignore */
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: EMAIL,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`,
      external: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9360836267",
      href: "tel:+919360836267",
      external: false,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: "https://www.google.com/maps/search/?api=1&query=Chennai,Tamil+Nadu,India",
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-card py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="mb-2 font-mono text-sm text-primary">Get in touch</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Let’s Work Together</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
          </div>

          {/* CTA card with gradient border */}
          <div className="animate-fade-up rounded-3xl bg-gradient-to-br from-primary via-primary/30 to-primary/0 p-px">
            <div className="relative overflow-hidden rounded-3xl bg-background px-6 py-14 text-center md:px-16">
              {/* Corner glow */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

              {/* Availability badge */}
              <div className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-medium text-foreground">Available for new opportunities</span>
              </div>

              <h3 className="relative mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Have a project in <span className="text-gradient">mind?</span>
              </h3>
              <p className="relative mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Open to innovative projects and exciting opportunities. Let’s turn ideas into something remarkable.
              </p>

              {/* Actions */}
              <div className="relative flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="hero" size="lg" asChild className="group/btn">
                  <a href={contactInfo[0].href} target="_blank" rel="noopener noreferrer">
                    <Mail className="mr-2 h-5 w-5" />
                    Say Hello
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </a>
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  onClick={copyEmail}
                  className="border border-white/30 text-white hover:border-primary/60 hover:bg-primary/20 hover:text-white"
                >
                  {copied ? <Check className="mr-2 h-4 w-4 text-green-400" /> : <Copy className="mr-2 h-4 w-4" />}
                  {copied ? "Copied!" : "Copy email"}
                </Button>
              </div>
            </div>
          </div>

          {/* Contact tiles */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group animate-fade-up relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-to-r from-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">{item.label}</p>
                <p className="break-words font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          {/* Social row */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full border border-white/30 text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/20 hover:text-white"
              >
                <a href="https://github.com/Sasmitabaskar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full border border-white/30 text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/20 hover:text-white"
              >
                <a href="https://www.linkedin.com/in/sasmitabaskar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;