"use client";

import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function VideoButton({
  videoUrl,
  className,
}: {
  videoUrl: string;
  className?: string;
}) {
  return (
    <Button
      className={cn(
        "flex items-center gap-2 rounded-full bg-red-700 text-white hover:bg-red-800",
        className
      )}
      onClick={() => window.open(videoUrl, "_blank")}
      size="sm"
    >
      <Play className="size-4" />
      <span>
        <span className="hidden lg:inline-block">Watch</span> Video
      </span>
    </Button>
  );
}
