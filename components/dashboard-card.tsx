import Link from "next/link";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type DashboardCardProps = {
  title: string;
  className?: string;
  link?: string;
} & PropsWithChildren;

export function DashboardCard({
  className,
  title,
  children,
  link,
}: DashboardCardProps) {
  return (
    <div className={cn("rounded-2xl border bg-card p-4", className)}>
      <div className="flex items-center justify-between pb-4">
        <p>{title}</p>
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
