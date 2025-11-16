"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { FormSchemaType } from "../schema/exercise-schema";

export async function createExercise(data: FormSchemaType) {
  const supabase = await createClient();

  const { error } = await supabase.from("exercises").insert({
    name: data.name,
    description: data.description,
    type: data.type,
    video_url: data.video_url,
    extra_videos: data.extra_videos.map((video) => video.url),
  });

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/exercises");
  return { success: true };
}

export async function updateExercise(id: string, data: FormSchemaType) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("exercises")
    .update({
      name: data.name,
      description: data.description,
      type: data.type,
      video_url: data.video_url,
      extra_videos: data.extra_videos.map((video) => video.url),
    })
    .eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/exercises");
  return { success: true };
}

export async function deleteExercise(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("exercises").delete().eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/exercises");
  return { success: true };
}
