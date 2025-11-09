"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { logger } from "@/lib/logger";
import { type Exercise, exerciseSchema } from "@/lib/mockData/exercises";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../ui/form";
import ExtraVideosFieldArray from "./extra-videos-field-array";

const formSchema = exerciseSchema
  .omit({
    id: true,
  })
  .extend({
    name: z.string().min(1, "Please enter an exercise name."),
    extraVideos: z.array(
      z.object({
        url: z.string(),
      })
    ),
  })
  .required({
    type: true,
  });

type ExerciseFormDialogProps = {
  exercise?: Exercise;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

export function ExerciseFormDialog({
  exercise,
  open,
  onOpenChange,
  className,
}: ExerciseFormDialogProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: exercise?.name ?? "",
      description: exercise?.description ?? "",
      type: exercise?.type,
      videoUrl: exercise?.videoUrl ?? "",
      extraVideos:
        exercise?.extraVideos?.map((video) => ({
          url: video,
        })) ?? [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    logger.info(JSON.stringify(values, null, 2));
    onCancel();
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
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id="reps" value="reps" />
                      <Label htmlFor="reps">Repetitions</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id="time" value="time" />
                      <Label htmlFor="time">Time</Label>
                    </div>
                  </RadioGroup>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="videoUrl"
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
                  onClick={() => {
                    onCancel();
                  }}
                  type="button"
                  variant="outline"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Form>
    </Dialog>
  );
}
