import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/#articles" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
            <Terminal className="h-5 w-5 text-primary" />
          </div>
          <span className="font-display text-lg font-semibold text-foreground">
            Log<span className="text-primary">Chit</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.href
                ? "text-primary"
                : "text-muted-foreground"
                }`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="hero" size="sm">
            Let's Connect
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="hero" size="sm" className="w-full mt-2">
              Let's Connect
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
