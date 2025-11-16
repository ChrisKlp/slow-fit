"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";
import { EditFormButtonBar } from "@/components/common/edit-form-button-bar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { logger } from "@/lib/logger";
import { exercises as allExercises } from "@/lib/mockData/exercises";
import {
  type ExtendedWorkoutExercise,
  workoutExerciseSchema,
} from "@/lib/mockData/workout-exercises";
import type { Workout } from "@/lib/mockData/workouts";
import { cn } from "@/lib/utils";
import { ExercisesFieldArray } from "./exercises-field-array";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  coverImage: z.url("Must be a valid URL"),
  tags: z.string().optional(),
  exercises: z
    .array(workoutExerciseSchema)
    .min(1, "At least one exercise is required"),
});

type WorkoutEditFormProps = {
  workout?: Workout;
  exercises?: ExtendedWorkoutExercise[];
  className?: string;
};

export function WorkoutEditForm({
  workout,
  exercises,
  className,
}: WorkoutEditFormProps) {
  const router = useRouter();
  const filtered = exercises?.map(({ exercise, ...rest }) => rest);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: workout?.name ?? "",
      coverImage: workout?.coverImage ?? "",
      tags: workout?.tags?.join(",") ?? "",
      exercises: filtered ?? [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
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

    const result = {
      ...values,
      exercises: sortedExercises,
    };

    logger.info("onSubmit");
    logger.info(JSON.stringify(result, null, 2));
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
            name="coverImage"
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

          <EditFormButtonBar
            formId={formId}
            onCancel={onCancel}
            onDelete={() => {
              logger.info(`Delete workout with id ${workout?.id}`);
            }}
          />
        </form>
      </Form>
    </div>
  );
}
