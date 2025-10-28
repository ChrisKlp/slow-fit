import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "./icon";

type InfoItemProps = {
  label: string;
  value: string | number;
  icon: LucideIcon;
  link?: string;
  variant?: "default" | "primary" | "secondary" | "destructive";
  className?: string;
};

export function InfoItem({
  label,
  value,
  icon: IconComponent,
  variant = "default",
  link,
  className,
}: InfoItemProps) {
  const content = (
    <>
      <Icon icon={IconComponent} link={Boolean(link)} variant={variant} />
      <span className="grid transition-transform group-hover:translate-x-1">
        <span className="text-muted-foreground text-sm">{label}</span>
        <span className="capitalize">{value}</span>
      </span>
    </>
  );

  if (link) {
    return (
      <Link
        className={cn(
          "group flex w-fit items-center justify-items-start gap-3",
          className
        )}
        href={link}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>{content}</div>
  );
}
