import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import Link from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = "primary", href, children, ...props },
    ref
  ) {
    const styles = cn(
      "inline-flex items-center justify-center gap-2 rounded-btn px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50",
      variant === "primary" &&
        "bg-accent text-dark shadow-card hover:bg-accent-light",
      variant === "secondary" && "bg-primary text-white hover:bg-primary-light",
      variant === "outline" &&
        "border-2 border-white bg-transparent text-white hover:bg-white/10",
      variant === "ghost" && "text-primary hover:bg-gray-100",
      className
    );

    if (href) {
      return (
        <Link href={href} className={styles}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={styles} type="button" {...props}>
        {children}
      </button>
    );
  }
);
