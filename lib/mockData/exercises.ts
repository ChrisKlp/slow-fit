export type Exercise = {
  id: string;
  name: string;
  description?: string;
  videoUrl?: string;
  extraVideos?: string[];
};

export const exercises: Exercise[] = [
  {
    id: "e-1",
    name: "Full Body Workout - YouTube",
    description: "25 minutes of exercise",
    videoUrl: "https://www.youtube.com/watch?v=cbKkB3POqaY",
    extraVideos: ["https://www.youtube.com/watch?v=cbKkB3POqaY"],
  },
  {
    id: "e-2",
    name: "Bench Press",
    description: "3 sets of 10 reps",
    videoUrl: "https://www.youtube.com/watch?v=cbKkB3POqaY",
  },
  {
    id: "e-3",
    name: "Deadlift",
    description: "3 sets of 10 reps",
    videoUrl: "https://www.youtube.com/watch?v=0w-4y6-9-sI",
    extraVideos: ["https://www.youtube.com/watch?v=cbKkB3POqaY"],
  },
  {
    id: "e-4",
    name: "Pull Ups",
    description: "3 sets of 10 reps",
    videoUrl: "https://www.youtube.com/watch?v=0w-4y6-9-sI",
  },
  {
    id: "e-5",
    name: "Push Ups",
    description: "3 sets of 10 reps",
    videoUrl: "https://www.youtube.com/watch?v=cbKkB3POqaY",
  },
  { id: "e-6", name: "Rows", description: "3 sets of 10 reps", videoUrl: "" },
];
