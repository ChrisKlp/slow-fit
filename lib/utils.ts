import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProgress(value: number, max: number) {
  return Math.round((value / max) * 100);
}

export function getWeeksNumber(totalSessions: number, weekPattern: string[]) {
  return Math.ceil(totalSessions / weekPattern.filter((d) => d === "W").length);
}
