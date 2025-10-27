export type ActivePlan = {
  id: string;
  name: string;
  startDate: string;
  finishDate: string;
  totalSessions: number;
  completedSessions: number;
  remainingSessions: number;
};

export const activePlans: ActivePlan[] = [
  {
    id: "1",
    name: "StrongLifts",
    startDate: "2025-03-01",
    finishDate: "2025-03-31",
    totalSessions: 16,
    completedSessions: 12,
    remainingSessions: 4,
  },
  {
    id: "2",
    name: "Workout Buddies",
    startDate: "2025-03-01",
    finishDate: "2025-03-31",
    totalSessions: 60,
    completedSessions: 48,
    remainingSessions: 12,
  },
  {
    id: "3",
    name: "Lazy Body",
    startDate: "2025-03-01",
    finishDate: "2025-03-31",
    totalSessions: 30,
    completedSessions: 8,
    remainingSessions: 22,
  },
];
