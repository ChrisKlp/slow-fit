export const plans = [
  {
    title: "StrongLifts",
    startDate: "2025-03-01",
    endDate: "2025-03-31",
    progress: 16,
  },
  {
    title: "Workout Buddies",
    startDate: "2025-03-01",
    endDate: "2025-03-31",
    progress: 60,
  },
  {
    title: "Lazy Body",
    startDate: "2025-03-01",
    endDate: "2025-03-31",
    progress: 74,
  },
];

export type Plan = {
  title: string;
  startDate: string;
  endDate: string;
  progress: number;
};
