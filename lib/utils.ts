import { type ClassValue, clsx } from "clsx";
import { addDays, format } from "date-fns";
import { twMerge } from "tailwind-merge";
import type { WorkoutPlan } from "./mockData/workout-plans";
import type { WorkoutSession } from "./mockData/workout-sessions";
import { workouts } from "./mockData/workouts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProgress(value: number, max: number) {
  return Math.round((value / max) * 100);
}

export function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not set`);
  }
  return value;
}

export function getWeeksNumber(totalSessions: number, daySequence: string[]) {
  return Math.ceil(totalSessions / daySequence.filter((d) => d === "W").length);
}

export function generateWorkoutSessions(
  startDate: Date,
  plan: WorkoutPlan,
  activePlanId: string
): WorkoutSession[] {
  const sessions: WorkoutSession[] = [];
  let currentDate = new Date(startDate);
  let sessionIndex = 0;
  let daySequenceIndex = 0;

  // Continue until we've generated all required sessions
  while (sessionIndex < plan.schedule.length) {
    // Get current day type from the sequence (cycling through the pattern)
    const currentDayType =
      plan.daySequence[daySequenceIndex % plan.daySequence.length];

    // Check if this is a workout day
    if (currentDayType === "W") {
      // Get the workout ID from the schedule, cycling through if needed
      const workoutId = plan.schedule[sessionIndex];

      // Find the workout details
      const workout = workouts.find((w) => w.id === workoutId);

      if (workout) {
        sessions.push({
          id: `ws-${activePlanId}-${sessionIndex + 1}`,
          name: workout.name,
          date: format(currentDate, "yyyy-MM-dd"),
          status: "scheduled",
          workoutId: workout.id,
          activePlanId,
          planName: plan.name,
        });

        sessionIndex++;
      }
    }

    // Move to next day and next position in the sequence
    currentDate = addDays(currentDate, 1);
    daySequenceIndex++;
  }

  return sessions;
}
