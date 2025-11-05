"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { logger } from "@/lib/logger";
import type { Exercise } from "@/lib/mockData/exercises";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

const formSchema = z.object({
  name: z.string().nonempty("Please enter an exercise name."),
  description: z.string().optional(),
  video: z.string().optional(),
  extraVideo: z.string().optional(),
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
      video: exercise?.videoUrl ?? "",
      extraVideo: exercise?.extraVideos?.[0] ?? "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    logger.info(JSON.stringify(values, null, 2));
  }

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogContent className={cn("grid items-start gap-6", className)}>
            <DialogHeader>
              <DialogTitle>
                {exercise ? "Edit exercise" : "New exercise"}
              </DialogTitle>
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

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  );
}
