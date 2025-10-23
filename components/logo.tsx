import { Dumbbell } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      className={cn("flex items-center gap-3", dark && "text-white")}
      href="/"
    >
      <span className="flex size-8 items-center justify-center rounded-md bg-blue-600">
        <Dumbbell className="size-5 text-white" />
      </span>
      <span>Slow Fit</span>
    </Link>
  );
}
