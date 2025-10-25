import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type DashboardCardProps = {
  title: string;
  className?: string;
} & PropsWithChildren;

export function DashboardCard({
  className,
  title,
  children,
}: DashboardCardProps) {
  return (
    <div className={cn("rounded-2xl border bg-card p-4", className)}>
      <p className="pb-4">{title}</p>
      {children}
    </div>
  );
}
