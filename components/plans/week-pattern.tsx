/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
import { BedSingle, Dumbbell, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "../common/icon";

type WeekPatternProps = {
  className?: string;
  pattern?: string[];
};

const patternMap = {
  W: Dumbbell,
  R: BedSingle,
} as Record<string, LucideIcon>;

export function WeekPattern({ className, pattern }: WeekPatternProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <p className="">Week Pattern</p>
      <div className="flex gap-2">
        {pattern?.map((item, index) => {
          const IconComponent = patternMap[item];
          return (
            <Icon
              icon={IconComponent}
              key={index}
              variant={item === "W" ? "secondary" : "default"}
            />
          );
        })}
      </div>
    </div>
  );
}
