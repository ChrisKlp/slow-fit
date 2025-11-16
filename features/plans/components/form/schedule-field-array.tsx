import { Plus, Trash } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { workouts } from "@/lib/mockData/workouts";

export function ScheduleFieldArray() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "schedule",
  });
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Workout schedule</h3>
      {fields.map((f, index) => (
        <div className="flex gap-2 lg:gap-4" key={f.id}>
          <FormField
            control={control}
            name={`schedule.${index}.id`}
            render={({ field, fieldState }) => (
              <div className="flex w-full gap-2 truncate">
                <Label className="w-8" htmlFor="plan">{`#${index + 1}`}</Label>
                <Select
                  name={field.name}
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <SelectTrigger
                    aria-invalid={fieldState.invalid}
                    className="w-full cursor-pointer"
                  >
                    <SelectValue placeholder="Select workout" />
                  </SelectTrigger>
                  <SelectContent>
                    {workouts.map((workout) => (
                      <SelectItem key={workout.id} value={workout.id}>
                        <span className="max-w-[60dvw] truncate">
                          {workout.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          />
          <Button
            onClick={() => remove(index)}
            size="icon"
            type="button"
            variant="destructive"
          >
            <Trash />
          </Button>
        </div>
      ))}
      <Button
        className="w-full"
        onClick={() => {
          append({
            id: "",
          });
        }}
        type="button"
        variant="secondary"
      >
        <Plus /> Add Workout
      </Button>
    </div>
  );
}
