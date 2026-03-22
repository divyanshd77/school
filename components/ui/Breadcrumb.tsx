import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => (
          <li key={`${c.label}-${i}`} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-4 w-4 text-gray-400" />}
            {c.href && i < items.length - 1 ? (
              <Link
                href={c.href}
                className="text-primary hover:underline"
              >
                {c.label}
              </Link>
            ) : (
              <span className="font-medium text-dark">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
