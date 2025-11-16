"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { DefaultOptionsMenu } from "@/components/common/options-menu";
import { routes } from "@/lib/navigation-items";
import { deleteWorkout } from "../actions/workout-actions";

export function SingleWorkoutOptionsMenu({ workoutId }: { workoutId: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function onDelete() {
    startTransition(async () => {
      const result = await deleteWorkout(workoutId);

      if (result.success) {
        toast.success("Exercise deleted!");
        router.push(routes.WORKOUTS);
      } else {
        toast.error(result.error || "Something went wrong");
      }
    });
  }

  return (
    <DefaultOptionsMenu
      editHref={`${routes.WORKOUTS}/${workoutId}/edit`}
      editLabel="Edit workout"
      isPending={isPending}
      onDelete={onDelete}
    />
  );
}
