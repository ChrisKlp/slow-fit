import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = {
  icon: LucideIcon;
  link?: boolean;
  variant?: "default" | "primary" | "secondary" | "destructive";
  className?: string;
};

export function Icon({
  icon: IconComponent,
  link,
  variant = "default",
  className,
}: IconProps) {
  return (
    <div
      className={cn(
        "grid size-7 shrink-0 place-items-center rounded-md bg-muted text-muted-foreground transition-colors md:size-10",
        {
          "bg-blue-600/20 text-blue-400": variant === "primary",
          "bg-teal-600/20 text-teal-400": variant === "secondary",
          "bg-red-600/20 text-red-400": variant === "destructive",
        },
        link && "group-hover:bg-muted-foreground/20",
        link && {
          "group-hover:bg-blue-600/40": variant === "primary",
          "group-hover:bg-teal-600/40": variant === "secondary",
          "group-hover:bg-red-600/40": variant === "destructive",
        },
        className
      )}
    >
      <IconComponent className="size-4 md:size-5" />
    </div>
  );
}
