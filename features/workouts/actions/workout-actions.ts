/** biome-ignore-all lint/style/noNonNullAssertion: <> */
"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { FormSchemaType } from "../schema/workout-schema";

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
    .single();
}

export async function createWorkout(data: FormSchemaType) {
  const supabase = await createClient();

  const { data: workout, error } = await supabase
    .from("workouts")
    .insert({
      name: data.name,
      tags: data.tags?.split(","),
      cover_image: data.cover_image,
    })
    .select("id")
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  if (data.exercises.length > 0) {
    const { error: exercisesError } = await supabase
      .from("workout_exercises")
      .insert(data.exercises.map((e) => ({ ...e, workout_id: workout.id })));

    if (exercisesError) {
      await supabase.from("workouts").delete().eq("id", workout.id);
      return { success: false, error: exercisesError.message };
    }
  }

  revalidatePath("/workouts");
  return { success: true };
}

export async function updateWorkout(id: string, data: FormSchemaType) {
  const supabase = await createClient();

  const { error: workoutError } = await supabase
    .from("workouts")
    .update({
      name: data.name,
      tags: data.tags?.split(","),
      cover_image: data.cover_image,
    })
    .eq("id", id);

  if (workoutError) {
    return { success: false, error: workoutError.message };
  }

  const exercisesResult = await updateWorkoutExercises(id, data.exercises);
  if (!exercisesResult.success) {
    return exercisesResult;
  }

  revalidatePath("/workouts");
  return { success: true };
}

export async function deleteWorkout(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("workouts").delete().eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/workouts");
  return { success: true };
}

async function updateWorkoutExercises(
  workoutId: string,
  exercises: FormSchemaType["exercises"]
) {
  const supabase = await createClient();

  const { data: existingExercises, error: fetchError } = await supabase
    .from("workout_exercises")
    .select("id")
    .eq("workout_id", workoutId);

  if (fetchError) {
    return { success: false, error: fetchError.message };
  }

  const existingIds = existingExercises?.map((e) => e.id) || [];
  const formIds = exercises.filter((e) => e.id).map((e) => e.id!);

  const toDelete = existingIds.filter((id) => !formIds.includes(id));
  if (toDelete.length > 0) {
    const { error: deleteError } = await supabase
      .from("workout_exercises")
      .delete()
      .in("id", toDelete);

    if (deleteError) {
      return { success: false, error: deleteError.message };
    }
  }

  const toUpdate = exercises.filter((e) => e.id);
  const toInsert = exercises.filter((e) => !e.id);

  for (const exercise of toUpdate) {
    const { error } = await supabase
      .from("workout_exercises")
      .update({
        ...exercise,
        workout_id: workoutId,
      })
      .eq("id", exercise.id!);

    if (error) {
      return { success: false, error: error.message };
    }
  }

  if (toInsert.length > 0) {
    const { error } = await supabase.from("workout_exercises").insert(
      toInsert.map((e) => ({
        ...e,
        workout_id: workoutId,
      }))
    );

    if (error) {
      return { success: false, error: error.message };
    }
  }
  return { success: true };
}
