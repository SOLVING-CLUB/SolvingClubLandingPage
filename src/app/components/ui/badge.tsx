import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden shadow-[inset_0_1px_rgba(255,255,255,0.45)]",
  {
    variants: {
      variant: {
        default:
          "border-primary/60 bg-gradient-to-b from-primary/15 via-primary/40 to-primary text-primary-foreground [a&]:hover:brightness-110",
        secondary:
          "border-secondary/60 bg-gradient-to-b from-secondary/10 via-secondary/40 to-secondary text-secondary-foreground [a&]:hover:brightness-110",
        destructive:
          "border-destructive/70 bg-gradient-to-b from-destructive/20 via-destructive/50 to-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70",
        outline:
          "border-border/70 bg-gradient-to-b from-white/10 via-background/40 to-black/60 text-foreground [a&]:hover:bg-accent/60 [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
