"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { EditFormButtonBar } from "@/components/common/edit-form-button-bar";
import { FormErrorList } from "@/components/form-error-list";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { Exercise } from "@/features/exercises/types";
import { routes } from "@/lib/navigation-items";
import { cn } from "@/lib/utils";
import {
  createWorkout,
  deleteWorkout,
  updateWorkout,
} from "../../actions/workout-actions";
import { type FormSchemaType, formSchema } from "../../schema/workout-schema";
import type { Workout } from "../../types";
import { ExercisesFieldArray } from "./exercises-field-array";

type WorkoutEditFormProps = {
  workout?: Workout;
  allExercises: Exercise[];
  className?: string;
};

const getDefaultValues = (workout?: Workout): FormSchemaType => ({
  name: workout?.name ?? "",
  cover_image: workout?.cover_image ?? "",
  tags: workout?.tags?.join(",") ?? "",
  exercises:
    workout?.exercises?.map((e, index) => ({
      id: e.id ?? undefined,
      workout_id: e.workout_id ?? undefined,
      exercise_id: e.exercise_id ?? undefined,
      sets: e.sets,
      reps: e.reps ?? undefined,
      rest: e.rest ?? undefined,
      time: e.time ?? undefined,
      order: e.order ?? index + 1,
    })) ?? [],
});

export function WorkoutEditForm({
  workout,
  allExercises,
  className,
}: WorkoutEditFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValues(workout),
  });

  function onSubmit(values: FormSchemaType) {
    // Sort exercises by order, keeping original array order for same order values
    const sortedExercises = values.exercises
      .map((ex, index) => ({ ...ex, originalIndex: index }))
      .sort((a, b) => {
        if (a.order === b.order) {
          return a.originalIndex - b.originalIndex;
        }
        return a.order - b.order;
      })
      .map(({ originalIndex, ...ex }, index) => ({
        ...ex,
        order: index + 1,
      }));

    const sortedValues = {
      ...values,
      exercises: sortedExercises,
    };

    startTransition(async () => {
      const result = workout?.id
        ? await updateWorkout(workout.id, sortedValues)
        : await createWorkout(sortedValues);

      if (result.success) {
        toast.success("Workout updated!");
        onCancel();
      } else {
        toast.error(result.error || "Something went wrong");
      }
    });
  }

  function onDelete(workoutId: string) {
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

  function onCancel() {
    router.back();
  }

  const formId = "workout-edit-form";

  return (
    <div className="card p-6">
      <Form {...form}>
        <form
          className={cn("grid items-start gap-6", className)}
          id={formId}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Exercise name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cover_image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover Image URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://images.unsplash.com/photo-1517836357463"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <ExercisesFieldArray
            allExercises={allExercises}
            workoutId={workout?.id}
          />

          <FormErrorList errors={form.formState.errors} />

          <EditFormButtonBar
            formId={formId}
            isPending={isPending}
            onCancel={onCancel}
            onDelete={workout?.id ? () => onDelete(workout.id) : undefined}
          />
        </form>
      </Form>
    </div>
  );
}
