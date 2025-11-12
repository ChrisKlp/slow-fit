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
import {
  type WorkoutPlan,
  workoutPlanSchema,
} from "@/lib/mockData/workout-plans";
import { cn } from "@/lib/utils";
import { ScheduleFieldArray } from "./schedule-field-array";
import { WeekPatternFieldArray } from "./week-pattern-field-array";

const formSchema = workoutPlanSchema
  .omit({
    id: true,
    workouts: true,
    totalSessions: true,
  })
  .extend({
    name: z.string().min(1, "Name is required"),
    schedule: z.array(
      z.object({
        id: z.string(),
      })
    ),
    daySequence: z.array(z.object({ value: z.boolean() })).length(7),
  })
  .required({
    name: true,
    schedule: true,
    daySequence: true,
  });

type PlanEditFormProps = {
  plan?: WorkoutPlan;
  className?: string;
};

export function PlanEditForm({ plan, className }: PlanEditFormProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: plan?.name ?? "",
      coverImage: plan?.coverImage ?? "",
      daySequence:
        plan?.daySequence.map((s) => ({ value: s === "W" })) ??
        Array.from({ length: 7 }, () => ({ value: false })),
      schedule: plan?.schedule.map((s) => ({ id: s })) ?? [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    logger.info(JSON.stringify(values, null, 2));
  }

  const formId = "plan-edit-form";

  function onCancel() {
    router.back();
  }
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
          <WeekPatternFieldArray />
          <ScheduleFieldArray />
          <EditFormButtonBar
            formId={formId}
            onCancel={onCancel}
            onDelete={() => {
              logger.info(`Delete workout with id ${plan?.id}`);
            }}
          />
        </form>
      </Form>
    </div>
  );
}
