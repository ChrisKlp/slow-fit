import z from "zod";
import type { Exercise } from "./exercises";

export const workoutExerciseSchema = z.object({
  id: z.string().optional(),
  workoutId: z.string(),
  exerciseId: z.string(),
  sets: z.number(),
  reps: z.number().optional(),
  rest: z.number().optional(),
  time: z.number().optional(),
  order: z.number(),
});

export type WorkoutExercise = z.infer<typeof workoutExerciseSchema>;

export type ExtendedWorkoutExercise = WorkoutExercise & {
  exercise?: Exercise;
};

export const workoutExercises: WorkoutExercise[] = [
  {
    id: "pe-1",
    workoutId: "w-1",
    exerciseId: "e-1",
    sets: 3,
    time: 12,
    order: 1,
  },
  {
    id: "pe-2",
    workoutId: "w-1",
    exerciseId: "e-2",
    sets: 3,
    reps: 10,
    rest: 30,
    order: 2,
  },
  {
    id: "pe-3",
    workoutId: "w-1",
    exerciseId: "e-3",
    sets: 4,
    reps: 12,
    rest: 30,
    order: 3,
  },
  {
    id: "pe-4",
    workoutId: "w-1",
    exerciseId: "e-4",
    sets: 3,
    reps: 15,
    rest: 90,
    order: 4,
  },
  {
    id: "pe-5",
    workoutId: "w-1",
    exerciseId: "e-5",
    sets: 4,
    time: 60,
    rest: 90,
    order: 5,
  },
  {
    id: "pe-6",
    workoutId: "w-1",
    exerciseId: "e-6",
    sets: 3,
    reps: 6,
    rest: 120,
    order: 6,
  },
];
