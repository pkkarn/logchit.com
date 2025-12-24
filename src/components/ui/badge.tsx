import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-primary/30 bg-primary/20 text-primary hover:bg-primary/30",
        secondary: "border-secondary/30 bg-secondary/20 text-secondary hover:bg-secondary/30",
        destructive: "border-destructive/30 bg-destructive/20 text-destructive hover:bg-destructive/30",
        outline: "border-border text-muted-foreground",
        tag: "border-border/30 bg-muted/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-200",
        glass: "border-border/50 bg-white/5 backdrop-blur-sm text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
