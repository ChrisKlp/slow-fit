import { Dumbbell } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "default" | "icon";
};

export function Logo({ variant = "default" }: LogoProps) {
  return (
    <Link className="flex items-center gap-3" href="/">
      <span className="flex size-8 items-center justify-center rounded-md bg-blue-600">
        <Dumbbell className="size-5 text-white" />
      </span>

      <span
        className={cn(
          "overflow-auto whitespace-nowrap",
          variant === "icon" && "opacity-0"
        )}
      >
        Slow Fit
      </span>
    </Link>
  );
}
