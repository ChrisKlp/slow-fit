import type { Tables } from "@/lib/supabase/database.types";

export type WorkoutExercise = Tables<"workout_exercises">;
export type WorkoutExerciseWithExercise = WorkoutExercise & {
  exercise: Tables<"exercises">;
};
export type Workout = Tables<"workouts"> & {
  exercises?: WorkoutExercise[];
};
export type FullWorkout = Workout & {
  exercises: WorkoutExerciseWithExercise[];
};
