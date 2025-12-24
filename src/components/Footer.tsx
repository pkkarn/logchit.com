import { Github, Twitter, Linkedin, Mail, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@devarchitect.dev", label: "Email" },
  ];

  return (
    <footer id="contact" className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/30">
                <Terminal className="h-5 w-5 text-primary" />
              </div>
              <span className="font-display text-lg font-semibold text-foreground">
                Dev<span className="text-primary">Architect</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building scalable digital architectures. Expertise in blockchain, AI, and enterprise systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/#articles" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Articles
              </Link>
              <Link to="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              hello@devarchitect.dev
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} DevArchitect. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
