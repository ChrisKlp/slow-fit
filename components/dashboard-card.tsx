import Link from "next/link";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type DashboardCardProps = {
  title: string;
  className?: string;
  link?: string;
  variant?: "default" | "accent";
} & PropsWithChildren;

export function DashboardCard({
  className,
  title,
  link,
  variant = "default",
  children,
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card p-6",
        variant === "accent" && "border-0 bg-blue-800",
        className
      )}
    >
      <div className="mb-6 flex items-center justify-between">
        <p className="font-semibold">{title}</p>
        {link && (
          <Link className="text-link text-sm" href={link}>
            View
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}
