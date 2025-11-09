import z from "zod";

export const exerciseTypeSchema = z.enum(["reps", "time"]);

export type ExerciseType = z.infer<typeof exerciseTypeSchema>;

export const exerciseSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: exerciseTypeSchema.default("reps"),
  description: z.string().optional(),
  videoUrl: z.string().optional(),
  extraVideos: z.array(z.string()).optional(),
});

export type Exercise = z.infer<typeof exerciseSchema>;

export const exercises: Exercise[] = [
  {
    id: "e-1",
    name: "Full Body Workout - YouTube",
    type: "time",
    description: "25 minutes of exercise",
    videoUrl: "https://www.youtube.com/watch?v=cbKkB3POqaY",
    extraVideos: ["https://www.youtube.com/watch?v=cbKkB3POqaY"],
  },
  {
    id: "e-2",
    name: "Bench Press",
    type: "reps",
    description: "3 sets of 10 reps",
    videoUrl: "https://www.youtube.com/watch?v=cbKkB3POqaY",
  },
  {
    id: "e-3",
    name: "Deadlift",
    type: "reps",
    description: "3 sets of 10 reps",
    videoUrl: "https://www.youtube.com/watch?v=0w-4y6-9-sI",
    extraVideos: ["https://www.youtube.com/watch?v=cbKkB3POqaY"],
  },
  {
    id: "e-4",
    name: "Pull Ups",
    type: "reps",
    description: "3 sets of 10 reps",
    videoUrl: "https://www.youtube.com/watch?v=0w-4y6-9-sI",
  },
  {
    id: "e-5",
    name: "Push Ups",
    type: "reps",
    description: "3 sets of 10 reps",
    videoUrl: "https://www.youtube.com/watch?v=cbKkB3POqaY",
  },
  {
    id: "e-6",
    name: "Rows",
    type: "reps",
    description: "3 sets of 10 reps",
    videoUrl: "",
  },
];
