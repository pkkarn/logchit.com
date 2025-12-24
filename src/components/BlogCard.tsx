import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/posts";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <article className="glass-card-hover p-6 h-full flex flex-col">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="tag">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {post.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/30">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>
          <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Read
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
