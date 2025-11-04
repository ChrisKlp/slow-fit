"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { logger } from "@/lib/logger";
import type { Exercise } from "@/lib/mockData/exercises";
import { cn } from "@/lib/utils";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

const formSchema = z.object({
  name: z.string().nonempty("Please enter an exercise name."),
  description: z.string().optional(),
  video: z.string().optional(),
  extraVideo: z.string().optional(),
});

type ExerciseFormProps = {
  exercise?: Exercise;
} & React.ComponentProps<"form">;

export function ExerciseForm({ className, exercise }: ExerciseFormProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: exercise?.name ?? "",
      description: exercise?.description ?? "",
      video: exercise?.videoUrl ?? "",
      extraVideo: exercise?.extraVideos?.[0] ?? "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    logger.info(JSON.stringify(values, null, 2));
  }

  return (
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Exercise description" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="video"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video</FormLabel>
              <FormControl>
                <Input placeholder="Video URL" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="extraVideo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Extra Video</FormLabel>
              <FormControl>
                <Input placeholder="Extra video URL" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button ref={buttonRef} type="submit">
          Save changes
        </Button>
      </form>
    </Form>
  );
}
