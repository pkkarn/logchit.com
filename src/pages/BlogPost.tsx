import { useParams, Link, Navigate } from "react-router-dom";
import { getPostBySlug } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import TableOfContents from "@/components/TableOfContents";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleShare = async (platform: "twitter" | "linkedin" | "copy") => {
    const url = window.location.href;
    const title = post.title;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "copy":
        await navigator.clipboard.writeText(url);
        toast({
          title: "Link copied",
          description: "Article link copied to clipboard",
        });
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 lg:px-8">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>

          {/* Header */}
          <header className="max-w-3xl mb-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground mb-6">
              {post.description}
            </p>

            {/* Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 text-sm text-muted-foreground pb-8 border-b border-border/50">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 mr-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleShare("twitter")}
                    className="p-2 rounded-md hover:bg-muted transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="p-2 rounded-md hover:bg-muted transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="p-2 rounded-md hover:bg-muted transition-colors"
                    aria-label="Copy link"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Content with TOC */}
          <div className="flex flex-col xl:flex-row gap-8">
            <div className="w-full max-w-3xl overflow-hidden shrink-1">
              {/* Header Image */}
              <div className="mb-12 rounded-2xl overflow-hidden border border-border/50 shadow-glow-lg">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-auto object-cover max-h-[400px]"
                />
              </div>
              <MarkdownRenderer content={post.content} />
            </div>
            <TableOfContents content={post.content} />
          </div>

          {/* Footer CTA */}
          <div className="max-w-3xl mt-16 pt-8 border-t border-border/50">
            <div className="glass-card p-8 text-center">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Enjoyed this article?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how these concepts could apply to your next project.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="hero" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Get in Touch
                </Button>
                <Link to="/">
                  <Button variant="heroOutline">
                    Read More Articles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
