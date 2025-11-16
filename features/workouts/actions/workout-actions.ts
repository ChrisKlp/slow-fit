"use server";

import { createClient } from "@/lib/supabase/server";

export async function getAllWorkouts() {
  const supabase = await createClient();

  return supabase.from("workouts").select(`
    *,
    exercises:workout_exercises (
      *
    )
  `);
}

export async function getWorkout(id: string) {
  const supabase = await createClient();

  return supabase
    .from("workouts")
    .select(`
      *,
      exercises:workout_exercises (
        *,
        exercise:exercise_id (
          *
        )
      )
    `)
    .eq("id", id)
    .maybeSingle();
}
