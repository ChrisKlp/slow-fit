import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = {
  icon: LucideIcon;
  variant?: "default" | "primary" | "secondary";
};

export function Icon({ icon: IconComponent, variant = "default" }: IconProps) {
  return (
    <div
      className={cn(
        "grid size-10 shrink-0 place-items-center rounded-md bg-muted text-muted-foreground",
        {
          "bg-blue-600/20 text-blue-400": variant === "primary",
          "bg-teal-600/20 text-teal-400": variant === "secondary",
        }
      )}
    >
      <IconComponent className="size-5" />
    </div>
  );
}
