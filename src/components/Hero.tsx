import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToArticles = () => {
    document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        {/* Secondary glow */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        {/* Accent glow */}
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] animate-float" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-up">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Technical Architecture & Engineering
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Fishing{" "}
            <span className="gradient-text">Thoughts</span>
            <br />
            to feed Brain
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            A self journal of thoughts, ideas, and experiences that else wise would've been lost in the void of time.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" onClick={scrollToArticles}>
              Read Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="mailto:p.k.karn786@gmail.com">Contact Me</a>
            </Button>
          </div>

          {/* Stats */}
          {/* <div
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30 max-w-lg mx-auto animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-foreground">12+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-foreground">15k</div>
              <div className="text-sm text-muted-foreground mt-1">Article Readers</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
