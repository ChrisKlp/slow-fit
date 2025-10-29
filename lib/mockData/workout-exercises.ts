import type { Exercise } from "./exercises";

export type WorkoutExercise = {
  id: string;
  workoutId: string;
  exerciseId: string;
  sets: number;
  reps?: number;
  rest?: number;
  time?: number;
  order?: number;
};

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
  },
  {
    id: "pe-2",
    workoutId: "w-1",
    exerciseId: "e-2",
    sets: 3,
    reps: 10,
    rest: 30,
  },
  {
    id: "pe-3",
    workoutId: "w-1",
    exerciseId: "e-3",
    sets: 4,
    reps: 12,
    rest: 30,
  },
  {
    id: "pe-4",
    workoutId: "w-1",
    exerciseId: "e-4",
    sets: 3,
    reps: 15,
    rest: 90,
  },
  {
    id: "pe-5",
    workoutId: "w-1",
    exerciseId: "e-5",
    sets: 4,
    time: 60,
    rest: 90,
  },
  {
    id: "pe-6",
    workoutId: "w-1",
    exerciseId: "e-6",
    sets: 3,
    reps: 6,
    rest: 120,
  },
];
