import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-card border border-gray-100 bg-white shadow-card",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
