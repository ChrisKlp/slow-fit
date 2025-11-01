import type { Workout } from "./workouts";

export type ActivityType = "W" | "R";

export type WorkoutPlan = {
  id: string;
  name: string;
  coverImage: string;
  totalSessions: number;
  daySequence: ActivityType[];
  workouts: Workout["id"][];
  schedule: Workout["id"][];
};

export const workoutPlans: WorkoutPlan[] = [
  {
    id: "wp-1",
    name: "Strong Lifts",
    coverImage:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1600",
    totalSessions: 8,
    daySequence: ["W", "R", "W", "R", "R", "W", "R"],
    workouts: ["w-1", "w-2", "w-3", "w-4"],
    schedule: ["w-1", "w-1", "w-2", "w-2", "w-3", "w-3", "w-4", "w-4"],
  },
  {
    id: "wp-2",
    name: "Workout Buddies",
    coverImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600",
    totalSessions: 6,
    daySequence: ["W", "W", "R", "R", "W", "W", "R"],
    workouts: ["w-5", "w-6"],
    schedule: ["w-5", "w-5", "w-5", "w-6", "w-6", "w-6"],
  },
  {
    id: "wp-3",
    name: "Lazy Body",
    coverImage:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600",
    totalSessions: 12,
    daySequence: ["W", "W", "W", "R", "R", "R", "R"],
    workouts: ["w-1", "w-2", "w-3", "w-4", "w-5", "w-6"],
    schedule: [
      "w-1",
      "w-2",
      "w-3",
      "w-4",
      "w-5",
      "w-6",
      "w-1",
      "w-2",
      "w-3",
      "w-4",
      "w-5",
      "w-6",
    ],
  },
];
