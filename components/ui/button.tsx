import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ghost: "bg-none",
        primary: "bg-primary500 active:bg-primary700 text-white",
        secondary:
          "bg-white border border-solid border-secondary400 text-secondary500 active:border-secondary300 active:bg-primary100",
        minimal:
          "text-secondary500 bg-primary100 hover:text-secondary400 hover:bg-primary100 active:text-secondary500 active:bg-secondary300",
        reversed: "text-primary500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "px-4 py-1 rounded",
        md: "px-4 py-2 rounded",
        lg: "px-6 py-3 rounded",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    if (href) {
      return (
        <Link href={href}>
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
          />
        </Link>
      );
    }
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
