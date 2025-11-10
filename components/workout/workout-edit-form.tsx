/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod";
import { logger } from "@/lib/logger";
import { exercises as allExercises } from "@/lib/mockData/exercises";
import {
  type ExtendedWorkoutExercise,
  workoutExerciseSchema,
} from "@/lib/mockData/workout-exercises";
import type { Workout } from "@/lib/mockData/workouts";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  coverImage: z.url("Must be a valid URL"),
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
  const filtered = exercises?.map(({ exercise, ...rest }) => rest);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: workout?.name ?? "",
      coverImage: workout?.coverImage ?? "",
      exercises: filtered ?? [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "exercises",
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
      .map(({ originalIndex, ...ex }) => ex);

    const result = {
      ...values,
      exercises: sortedExercises,
    };

    logger.info(JSON.stringify(result, null, 2));
  }

  return (
    <div className="card p-6">
      <Form {...form}>
        <form
          className={cn("grid items-start gap-6", className)}
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
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Exercises</h3>
            {fields.map((_, index) => {
              const exerciseId = form.watch(`exercises.${index}.exerciseId`);
              const selectedExercise = allExercises.find(
                (ex) => ex.id === exerciseId
              );
              const isTimeBasedExercise = selectedExercise?.type === "time";

              return (
                <div className="flex gap-4" key={index}>
                  <div className="card w-full space-y-4 p-4">
                    <FormField
                      control={form.control}
                      name={`exercises.${index}.exerciseId`}
                      render={({ field, fieldState }) => (
                        <div className="grid gap-2">
                          <Label htmlFor="plan">Exercise</Label>
                          <Select
                            name={field.name}
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger
                              aria-invalid={fieldState.invalid}
                              className="w-full cursor-pointer truncate"
                            >
                              <SelectValue placeholder="Select exercise" />
                            </SelectTrigger>
                            <SelectContent>
                              {allExercises.map((exercise) => (
                                <SelectItem
                                  key={exercise.id}
                                  value={exercise.id}
                                >
                                  <span className="max-w-[60dvw] truncate">
                                    {exercise.name}
                                  </span>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    />
                    <div className="grid grid-cols-3 gap-3">
                      <FormField
                        control={form.control}
                        name={`exercises.${index}.sets`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sets</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Sets"
                                type="number"
                                {...field}
                                onChange={(e) =>
                                  field.onChange(Number(e.target.value))
                                }
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      {isTimeBasedExercise ? (
                        <FormField
                          control={form.control}
                          name={`exercises.${index}.time`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Time (sec)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Time"
                                  type="number"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(
                                      e.target.value
                                        ? Number(e.target.value)
                                        : undefined
                                    )
                                  }
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      ) : (
                        <FormField
                          control={form.control}
                          name={`exercises.${index}.reps`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Reps</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Reps"
                                  type="number"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(
                                      e.target.value
                                        ? Number(e.target.value)
                                        : undefined
                                    )
                                  }
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      )}
                      <FormField
                        control={form.control}
                        name={`exercises.${index}.order`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Order</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Order"
                                type="number"
                                {...field}
                                onChange={(e) =>
                                  field.onChange(Number(e.target.value))
                                }
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name={`exercises.${index}.rest`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rest (sec, optional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Rest time"
                              type="number"
                              {...field}
                              onChange={(e) =>
                                field.onChange(
                                  e.target.value
                                    ? Number(e.target.value)
                                    : undefined
                                )
                              }
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    onClick={() => remove(index)}
                    size="icon"
                    type="button"
                    variant="destructive"
                  >
                    <Trash />
                  </Button>
                </div>
              );
            })}
            <Button
              className="w-full"
              onClick={() => {
                const maxOrder = fields.reduce((max, _, idx) => {
                  const order = form.getValues(`exercises.${idx}.order`);
                  return Math.max(max, order ?? 0);
                }, 0);

                append({
                  exerciseId: "",
                  sets: 0,
                  order: maxOrder + 1,
                  workoutId: workout?.id ?? "",
                });
              }}
              variant="secondary"
            >
              <Plus /> Add Exercise
            </Button>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancel</Button>
            <Button variant="destructive">Delete</Button>
            <Button type="submit">
              <span className="flex gap-1">
                Save<span className="hidden md:inline-flex">changes</span>
              </span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
