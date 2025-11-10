/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
import { Plus, Trash } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Exercise } from "@/lib/mockData/exercises";

type ExercisesFieldArrayProps = {
  allExercises: Exercise[];
  workoutId?: string;
};

export function ExercisesFieldArray({
  allExercises,
  workoutId,
}: ExercisesFieldArrayProps) {
  const { control, getValues, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "exercises",
  });
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Exercises</h3>
      {fields.map((_, index) => {
        const exerciseId = watch(`exercises.${index}.exerciseId`);
        const selectedExercise = allExercises.find(
          (ex) => ex.id === exerciseId
        );
        const isTimeBasedExercise = selectedExercise?.type === "time";

        return (
          <div className="flex gap-2 lg:gap-4" key={index}>
            <div className="card w-full space-y-4 p-4">
              <FormField
                control={control}
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
                          <SelectItem key={exercise.id} value={exercise.id}>
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
                  control={control}
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
                    control={control}
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
                    control={control}
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
                  control={control}
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
                control={control}
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
                            e.target.value ? Number(e.target.value) : undefined
                          )
                        }
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="size-7 lg:size-9"
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
            const order = getValues(`exercises.${idx}.order`);
            return Math.max(max, order ?? 0);
          }, 0);

          append({
            exerciseId: "",
            sets: 0,
            order: maxOrder + 1,
            workoutId: workoutId ?? "",
          });
        }}
        type="button"
        variant="secondary"
      >
        <Plus /> Add Exercise
      </Button>
    </div>
  );
}
