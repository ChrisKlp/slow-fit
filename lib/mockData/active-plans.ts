import {
  lazyBodySessions,
  strongLiftsSessions,
  type WorkoutSession,
  workoutBuddiesSessions,
} from "./workout-sessions";

export type ActivePlan = {
  id: string;
  name: string;
  startDate: string;
  finishDate: string;
  totalSessions: number;
  completedSessions: number;
  remainingSessions: number;
  workoutPlanId: string;
  workoutSessions: WorkoutSession[];
};

export const activePlans: ActivePlan[] = [
  {
    id: "ap-1",
    name: "Strong Lifts",
    startDate: "2025-03-01",
    finishDate: "2025-03-31",
    totalSessions: 16,
    completedSessions: 12,
    remainingSessions: 4,
    workoutPlanId: "wp-1",
    workoutSessions: strongLiftsSessions,
  },
  {
    id: "ap-2",
    name: "Workout Buddies",
    startDate: "2025-03-01",
    finishDate: "2025-03-31",
    totalSessions: 60,
    completedSessions: 48,
    remainingSessions: 12,
    workoutPlanId: "wp-2",
    workoutSessions: workoutBuddiesSessions,
  },
  {
    id: "ap-3",
    name: "Lazy Body",
    startDate: "2025-03-01",
    finishDate: "2025-03-31",
    totalSessions: 30,
    completedSessions: 8,
    remainingSessions: 22,
    workoutPlanId: "wp-3",
    workoutSessions: lazyBodySessions,
  },
];
