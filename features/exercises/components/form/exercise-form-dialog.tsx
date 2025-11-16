"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldContent,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { createExercise, updateExercise } from "../../actions/exercise-actions";
import { type FormSchemaType, formSchema } from "../../schema/exercise-schema";
import type { Exercise } from "../../types";
import ExtraVideosFieldArray from "./extra-videos-field-array";

type ExerciseFormDialogProps = {
  exercise?: Exercise;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

const getDefaultValues = (exercise?: Exercise): FormSchemaType => ({
  name: exercise?.name ?? "",
  description: exercise?.description ?? undefined,
  type: exercise?.type ?? "reps",
  video_url: exercise?.video_url ?? undefined,
  extra_videos:
    exercise?.extra_videos?.map((video) => ({
      url: video,
    })) ?? [],
});

export function ExerciseFormDialog({
  exercise,
  open,
  onOpenChange,
  className,
}: ExerciseFormDialogProps) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValues(exercise),
  });

  useEffect(() => {
    if (open) {
      form.reset(getDefaultValues(exercise));
    }
  }, [open, exercise, form]);

  function onSubmit(values: FormSchemaType) {
    startTransition(async () => {
      const result = exercise?.id
        ? await updateExercise(exercise.id, values)
        : await createExercise(values);

      if (result.success) {
        toast.success(exercise?.id ? "Exercise updated!" : "Exercise created!");
        onCancel();
      } else {
        toast.error(result.error || "Something went wrong");
      }
    });
  }

  function onCancel() {
    onOpenChange?.(false);
    setTimeout(() => {
      form.clearErrors();
      form.reset();
    }, 300);
  }

  return (
    <Dialog onOpenChange={onCancel} open={open}>
      <Form {...form}>
        <DialogContent>
          <form
            className={cn("grid items-start gap-6", className)}
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <DialogHeader>
              <DialogTitle>
                {exercise ? "Edit exercise" : "New exercise"}
              </DialogTitle>
              <DialogDescription className="hidden" />
            </DialogHeader>
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
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Exercise Type</FormLabel>

                  <RadioGroup
                    className="flex"
                    defaultValue="reps"
                    name={field.name}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    {[
                      { id: "reps", title: "Repetitions" },
                      { id: "time", title: "Time" },
                    ].map((plan) => (
                      <FieldLabel htmlFor={plan.id} key={plan.id}>
                        <Field className="p-2! px-3!" orientation="horizontal">
                          <FieldContent>
                            <FieldTitle>{plan.title}</FieldTitle>
                          </FieldContent>
                          <RadioGroupItem id={plan.id} value={plan.id} />
                        </Field>
                      </FieldLabel>
                    ))}
                  </RadioGroup>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="video_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Video</FormLabel>
                  <FormControl>
                    <Input placeholder="Video URL" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <ExtraVideosFieldArray />

            <DialogFooter>
              <DialogClose asChild>
                <Button
                  disabled={isPending}
                  onClick={() => {
                    onCancel();
                  }}
                  type="button"
                  variant="outline"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button disabled={isPending} type="submit">
                {isPending ? "Saving..." : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Form>
    </Dialog>
  );
}
