import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const smallStatVariants = cva(
  "group flex items-center justify-between gap-4 overflow-hidden rounded-2xl p-6",
  {
    variants: {
      variant: {
        default: "border bg-card [&_.icon-wrapper]:bg-accent",
        primary:
          "border-0 bg-blue-700 [&_.icon-wrapper]:bg-white/10 [&_svg]:text-white",
        teal: "border-0 bg-teal-400 text-background [&_.icon-wrapper]:bg-teal-300 [&_svg]:text-background",
        danger:
          "border-0 bg-red-700 [&_.icon-wrapper]:bg-white/5 [&_svg]:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type SmallStatProps = {
  content: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
} & VariantProps<typeof smallStatVariants>;

export function SmallStat({
  content,
  description,
  Icon,
  variant,
  className,
}: SmallStatProps) {
  return (
    <div className={cn(smallStatVariants({ variant, className }))}>
      <div>
        <span className="font-semibold text-3xl">{content}</span>
        <p className="text-sm">{description}</p>
      </div>
      <div
        className={cn("icon-wrapper grid place-items-center rounded-full p-3")}
      >
        <Icon className="size-7 text-blue-400" />
      </div>
    </div>
  );
}
