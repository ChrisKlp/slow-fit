import { isPastDate } from "../calendar-utils";

export type WorkoutSessionStatus = "completed" | "scheduled" | "missed";

export type WorkoutSession = {
  id: string;
  name: string;
  date: string;
  status: WorkoutSessionStatus;
  workoutId: string;
  activePlanId: string;
  planName: string;
};

const sessions: WorkoutSession[] = [
  {
    id: "ws-1",
    name: "Full body workout",
    date: "2025-07-29",
    status: "completed",
    workoutId: "w-1",
    activePlanId: "ap-1",
    planName: "Strong Lifts",
  },
  {
    id: "ws-2",
    name: "Upper body workout",
    date: "2025-08-02",
    status: "completed",
    workoutId: "w-2",
    activePlanId: "ap-2",
    planName: "Workout Buddies",
  },
  {
    id: "ws-3",
    name: "Lower body workout",
    date: "2025-08-03",
    status: "scheduled",
    workoutId: "w-3",
    activePlanId: "ap-3",
    planName: "Lazy Body",
  },
  {
    id: "ws-4",
    name: "Full body workout - Advanced",
    date: "2025-08-06",
    status: "completed",
    workoutId: "w-4",
    activePlanId: "ap-1",
    planName: "Strong Lifts",
  },
  {
    id: "ws-5",
    name: "Upper body workout - Advanced",
    date: "2025-08-10",
    status: "scheduled",
    workoutId: "w-5",
    activePlanId: "ap-2",
    planName: "Workout Buddies",
  },
  {
    id: "ws-6",
    name: "Lower body workout - Advanced",
    date: "2025-08-15",
    status: "completed",
    workoutId: "w-6",
    activePlanId: "ap-3",
    planName: "Lazy Body",
  },
  {
    id: "ws-7",
    name: "Upper body workout",
    date: "2025-08-20",
    status: "completed",
    workoutId: "w-2",
    activePlanId: "ap-1",
    planName: "Strong Lifts",
  },
  {
    id: "ws-8",
    name: "Upper body workout - Advanced",
    date: "2025-08-25",
    status: "scheduled",
    workoutId: "w-5",
    activePlanId: "ap-2",
    planName: "Workout Buddies",
  },
  {
    id: "ws-9",
    name: "Lower body workout - Advanced",
    date: "2025-09-01",
    status: "completed",
    workoutId: "w-6",
    activePlanId: "ap-3",
    planName: "Lazy Body",
  },
  {
    id: "ws-10",
    name: "Full body workout",
    date: "2025-09-05",
    status: "completed",
    workoutId: "w-1",
    activePlanId: "ap-1",
    planName: "Strong Lifts",
  },
  {
    id: "ws-11",
    name: "Upper body workout",
    date: "2025-09-10",
    status: "completed",
    workoutId: "w-2",
    activePlanId: "ap-2",
    planName: "Workout Buddies",
  },
  {
    id: "ws-12",
    name: "Lower body workout",
    date: "2025-09-12",
    status: "completed",
    workoutId: "w-3",
    activePlanId: "ap-3",
    planName: "Lazy Body",
  },
  {
    id: "ws-13",
    name: "Full body workout - Advanced",
    date: "2025-09-18",
    status: "completed",
    workoutId: "w-4",
    activePlanId: "ap-1",
    planName: "Strong Lifts",
  },
  {
    id: "ws-14",
    name: "Upper body workout - Advanced",
    date: "2025-09-22",
    status: "completed",
    workoutId: "w-5",
    activePlanId: "ap-2",
    planName: "Workout Buddies",
  },
  {
    id: "ws-15",
    name: "Lower body workout - Advanced",
    date: "2025-09-28",
    status: "completed",
    workoutId: "w-6",
    activePlanId: "ap-3",
    planName: "Lazy Body",
  },
  {
    id: "ws-16",
    name: "Upper body workout",
    date: "2025-10-02",
    status: "completed",
    workoutId: "w-2",
    activePlanId: "ap-1",
    planName: "Strong Lifts",
  },
  {
    id: "ws-17",
    name: "Upper body workout - Advanced",
    date: "2025-10-05",
    status: "scheduled",
    workoutId: "w-5",
    activePlanId: "ap-2",
    planName: "Workout Buddies",
  },
  {
    id: "ws-18",
    name: "Lower body workout - Advanced",
    date: "2025-10-10",
    status: "completed",
    workoutId: "w-6",
    activePlanId: "ap-3",
    planName: "Lazy Body",
  },
  {
    id: "ws-19",
    name: "Full body workout",
    date: "2025-10-14",
    status: "completed",
    workoutId: "w-1",
    activePlanId: "ap-1",
    planName: "Strong Lifts",
  },
  {
    id: "ws-20",
    name: "Upper body workout",
    date: "2025-10-20",
    status: "scheduled",
    workoutId: "w-2",
    activePlanId: "ap-2",
    planName: "Workout Buddies",
  },
  {
    id: "ws-21",
    name: "Lower body workout",
    date: "2025-10-25",
    status: "completed",
    workoutId: "w-3",
    activePlanId: "ap-3",
    planName: "Lazy Body",
  },
  {
    id: "ws-22",
    name: "Full body workout - Advanced",
    date: "2025-10-28",
    status: "scheduled",
    workoutId: "w-4",
    activePlanId: "ap-1",
    planName: "Strong Lifts",
  },
  {
    id: "ws-23",
    name: "Upper body workout - Advanced",
    date: "2025-11-02",
    status: "scheduled",
    workoutId: "w-5",
    activePlanId: "ap-2",
    planName: "Workout Buddies",
  },
  {
    id: "ws-24",
    name: "Lower body workout - Advanced",
    date: "2025-11-05",
    status: "scheduled",
    workoutId: "w-6",
    activePlanId: "ap-3",
    planName: "Lazy Body",
  },
  {
    id: "ws-25",
    name: "Upper body workout",
    date: "2025-11-10",
    status: "scheduled",
    workoutId: "w-2",
    activePlanId: "ap-1",
    planName: "Strong Lifts",
  },
  {
    id: "ws-26",
    name: "Upper body workout - Advanced",
    date: "2025-11-15",
    status: "scheduled",
    workoutId: "w-5",
    activePlanId: "ap-2",
    planName: "Workout Buddies",
  },
  {
    id: "ws-27",
    name: "Lower body workout - Advanced",
    date: "2025-11-20",
    status: "scheduled",
    workoutId: "w-6",
    activePlanId: "ap-3",
    planName: "Lazy Body",
  },
  {
    id: "ws-28",
    name: "Full body workout",
    date: "2025-11-25",
    status: "scheduled",
    workoutId: "w-1",
    activePlanId: "ap-1",
    planName: "Strong Lifts",
  },
  {
    id: "ws-29",
    name: "Upper body workout",
    date: "2025-12-01",
    status: "scheduled",
    workoutId: "w-2",
    activePlanId: "ap-2",
    planName: "Workout Buddies",
  },
  {
    id: "ws-30",
    name: "Lower body workout",
    date: "2025-12-05",
    status: "scheduled",
    workoutId: "w-3",
    activePlanId: "ap-3",
    planName: "Lazy Body",
  },
  {
    id: "ws-31",
    name: "Full body workout - Advanced",
    date: "2025-12-10",
    status: "scheduled",
    workoutId: "w-4",
    activePlanId: "ap-1",
    planName: "Strong Lifts",
  },
  {
    id: "ws-32",
    name: "Upper body workout - Advanced",
    date: "2025-12-15",
    status: "scheduled",
    workoutId: "w-5",
    activePlanId: "ap-2",
    planName: "Workout Buddies",
  },
  {
    id: "ws-33",
    name: "Lower body workout - Advanced",
    date: "2025-12-20",
    status: "scheduled",
    workoutId: "w-6",
    activePlanId: "ap-3",
    planName: "Lazy Body",
  },
  {
    id: "ws-34",
    name: "Upper body workout",
    date: "2025-12-25",
    status: "scheduled",
    workoutId: "w-2",
    activePlanId: "ap-1",
    planName: "Strong Lifts",
  },
  {
    id: "ws-35",
    name: "Upper body workout - Advanced",
    date: "2026-01-01",
    status: "scheduled",
    workoutId: "w-5",
    activePlanId: "ap-2",
    planName: "Workout Buddies",
  },
  {
    id: "ws-36",
    name: "Lower body workout - Advanced",
    date: "2026-01-05",
    status: "scheduled",
    workoutId: "w-6",
    activePlanId: "ap-3",
    planName: "Lazy Body",
  },
  {
    id: "ws-37",
    name: "Full body workout",
    date: "2026-01-10",
    status: "scheduled",
    workoutId: "w-1",
    activePlanId: "ap-1",
    planName: "Strong Lifts",
  },
  {
    id: "ws-38",
    name: "Upper body workout",
    date: "2026-01-15",
    status: "scheduled",
    workoutId: "w-2",
    activePlanId: "ap-2",
    planName: "Workout Buddies",
  },
  {
    id: "ws-39",
    name: "Lower body workout",
    date: "2026-01-20",
    status: "scheduled",
    workoutId: "w-3",
    activePlanId: "ap-3",
    planName: "Lazy Body",
  },
  {
    id: "ws-40",
    name: "Full body workout - Advanced",
    date: "2026-01-25",
    status: "scheduled",
    workoutId: "w-4",
    activePlanId: "ap-1",
    planName: "Strong Lifts",
  },
];

export const allWorkoutSessions: WorkoutSession[] = sessions.map((session) => {
  const isMissed = isPastDate(session.date) && session.status !== "completed";
  return {
    ...session,
    status: isMissed ? "missed" : session.status,
  };
});

export const allPastSessions: WorkoutSession[] = allWorkoutSessions
  .filter((session) => isPastDate(session.date))
  .sort((a, b) => b.date.localeCompare(a.date));

export const allFutureSessions: WorkoutSession[] = allWorkoutSessions.filter(
  (session) => !isPastDate(session.date)
);

export const strongLiftsSessions: WorkoutSession[] = allWorkoutSessions.filter(
  (session) => session.planName === "Strong Lifts"
);

export const workoutBuddiesSessions: WorkoutSession[] =
  allWorkoutSessions.filter(
    (session) => session.planName === "Workout Buddies"
  );

export const lazyBodySessions: WorkoutSession[] = allWorkoutSessions.filter(
  (session) => session.planName === "Lazy Body"
);
