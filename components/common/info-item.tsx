import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "./icon";

type InfoItemProps = {
  label: string;
  value: string | number;
  icon: LucideIcon;
  variant?: "default" | "primary" | "secondary";
  className?: string;
};

export function InfoItem({
  label,
  value,
  icon: IconComponent,
  variant = "default",
  className,
}: InfoItemProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Icon icon={IconComponent} variant={variant} />
      <div className="grid">
        <span className="text-muted-foreground text-sm">{label}</span>
        <span>{value}</span>
      </div>
    </div>
  );
}
