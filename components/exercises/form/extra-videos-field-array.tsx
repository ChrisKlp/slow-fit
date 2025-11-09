/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */

import { Trash } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function ExtraVideosFieldArray() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "extraVideos",
  });

  return (
    <>
      {fields.map((_, index) => (
        <FormField
          control={control}
          key={index}
          name={`extraVideos.${index}.url`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Extra Video {index + 1}</FormLabel>
              <FormControl>
                <div className="flex gap-4">
                  <Input placeholder="Extra video URL" {...field} />
                  <Button
                    onClick={() => remove(index)}
                    size="icon"
                    type="button"
                    variant="destructive"
                  >
                    <Trash />
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      ))}
      <Button
        onClick={() => append({ url: "" })}
        size="sm"
        type="button"
        variant="secondary"
      >
        Add Extra Video
      </Button>
    </>
  );
}
