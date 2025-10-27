import type { Exercise } from "./exercises";
import type { Workout } from "./workouts";

export type PlannedExercise = {
  id: string;
  workoutId: Workout["id"];
  exerciseId: Exercise["id"];
  sets: number;
  reps?: number;
  rest?: number;
  time?: number;
  order?: number;
};

export const plannedExercises: PlannedExercise[] = [
  {
    id: "pe-1",
    workoutId: "w-1",
    exerciseId: "e-1",
    sets: 3,
    reps: 10,
  },
  {
    id: "pe-2",
    workoutId: "w-1",
    exerciseId: "e-2",
    sets: 3,
    reps: 10,
  },
  {
    id: "pe-3",
    workoutId: "w-1",
    exerciseId: "e-3",
    sets: 3,
    reps: 10,
  },
  {
    id: "pe-4",
    workoutId: "w-1",
    exerciseId: "e-4",
    sets: 3,
    reps: 10,
  },
  {
    id: "pe-5",
    workoutId: "w-1",
    exerciseId: "e-5",
    sets: 3,
    reps: 10,
  },
  {
    id: "pe-6",
    workoutId: "w-1",
    exerciseId: "e-6",
    sets: 3,
    reps: 10,
  },
];
