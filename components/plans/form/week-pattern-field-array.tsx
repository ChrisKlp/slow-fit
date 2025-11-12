import { useFieldArray, useFormContext } from "react-hook-form";
import { FormField } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { ActivityToggle } from "./activity-toggle";

export function WeekPatternFieldArray() {
  const { control } = useFormContext();
  const { fields } = useFieldArray({
    control,
    name: "daySequence",
  });

  return (
    <div className="space-y-2">
      <Label className="">Week Pattern</Label>
      <div className="flex gap-2">
        {fields?.map((item, index) => (
          <div className="grid gap-1" key={item.id}>
            <FormField
              control={control}
              name={`daySequence.${index}.value`}
              render={({ field }) => (
                <>
                  <ActivityToggle
                    onPressedChange={field.onChange}
                    pressed={field.value}
                  />
                  <span className="text-center text-xs">{index + 1}</span>
                </>
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
