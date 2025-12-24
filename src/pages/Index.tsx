import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const posts = getAllPosts();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <Hero />

        {/* Articles Section */}
        <section id="articles" className="py-24 scroll-mt-20">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Section Header */}
            <div className="max-w-2xl mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Latest Articles
              </h2>
              <p className="text-muted-foreground text-lg">
                Deep dives into blockchain architecture, AI systems, and software engineering best practices.
              </p>
            </div>

            {/* Articles Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {/* Empty state for future */}
            {posts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No articles yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
