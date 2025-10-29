"use client";

import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type VideoButtonProps = {
  videoUrl: string;
  className?: string;
  label?: string;
};

export function VideoButton({ videoUrl, className, label }: VideoButtonProps) {
  return (
    <Button
      className={cn(
        "flex items-center gap-2 rounded-full bg-red-700 text-white hover:bg-red-800",
        className
      )}
      onClick={(e) => {
        e.stopPropagation();
        window.open(videoUrl, "_blank");
      }}
      size="sm"
    >
      <Play className="size-4" />
      {label ? (
        <span>{label}</span>
      ) : (
        <span>
          <span className="hidden lg:inline-block">Watch</span> Video
        </span>
      )}
    </Button>
  );
}
