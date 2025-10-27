export type WorkoutSessionStatus = "completed" | "scheduled" | "missed";

export type WorkoutSession = {
  date: string;
  status: WorkoutSessionStatus;
};

export const workoutSessions: WorkoutSession[] = [
  { date: "2025-07-29", status: "completed" },
  { date: "2025-08-02", status: "completed" },
  { date: "2025-08-03", status: "missed" },
  { date: "2025-08-06", status: "completed" },
  { date: "2025-08-10", status: "missed" },
  { date: "2025-08-15", status: "completed" },
  { date: "2025-08-20", status: "completed" },
  { date: "2025-08-25", status: "missed" },
  { date: "2025-09-01", status: "completed" },
  { date: "2025-09-05", status: "completed" },
  { date: "2025-09-10", status: "completed" },
  { date: "2025-09-12", status: "completed" },
  { date: "2025-09-18", status: "completed" },
  { date: "2025-09-22", status: "completed" },
  { date: "2025-09-28", status: "completed" },
  { date: "2025-10-02", status: "completed" },
  { date: "2025-10-05", status: "missed" },
  { date: "2025-10-10", status: "completed" },
  { date: "2025-10-14", status: "completed" },
  { date: "2025-10-20", status: "missed" },
  { date: "2025-10-25", status: "completed" },
  { date: "2025-10-28", status: "scheduled" },
  { date: "2025-11-02", status: "scheduled" },
  { date: "2025-11-05", status: "scheduled" },
  { date: "2025-11-10", status: "scheduled" },
  { date: "2025-11-15", status: "scheduled" },
  { date: "2025-11-20", status: "scheduled" },
  { date: "2025-11-25", status: "scheduled" },
  { date: "2025-12-01", status: "scheduled" },
  { date: "2025-12-05", status: "scheduled" },
  { date: "2025-12-10", status: "scheduled" },
  { date: "2025-12-15", status: "scheduled" },
  { date: "2025-12-20", status: "scheduled" },
  { date: "2025-12-25", status: "scheduled" },
  { date: "2026-01-01", status: "scheduled" },
  { date: "2026-01-05", status: "scheduled" },
  { date: "2026-01-10", status: "scheduled" },
  { date: "2026-01-15", status: "scheduled" },
  { date: "2026-01-20", status: "scheduled" },
  { date: "2026-01-25", status: "scheduled" },
];
