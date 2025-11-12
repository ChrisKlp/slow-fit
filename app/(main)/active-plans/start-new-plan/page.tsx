"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { Clipboard } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DatePicker } from "@/components/common/date-picker";
import { PageHeader } from "@/components/common/page-header";
import { PlanCard } from "@/components/plans/plan-card";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { logger } from "@/lib/logger";
import { workoutPlans } from "@/lib/mockData/workout-plans";
import { generateWorkoutSessions } from "@/lib/utils";

const formSchema = z.object({
  plan: z.string().nonempty("Please select a plan."),
  date: z.date({
    error: "Please select a date.",
  }),
});

export default function StartNewPlanPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: "",
    },
  });

  const planId = form.watch("plan");
  const plan = planId ? workoutPlans.find((p) => p.id === planId) : undefined;

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (plan) {
      const sessions = generateWorkoutSessions(values.date, plan, plan?.id);
      logger.log(JSON.stringify(sessions, null, 2));
    }
  }

  return (
    <>
      <PageHeader hideBreadcrumbs title="Start New Plan" />
      <div className="card p-6">
        <Form {...form}>
          <form
            className="grid justify-items-start gap-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="plan"
              render={({ field, fieldState }) => (
                <div className="grid gap-3">
                  <Label htmlFor="plan">Ready to train? Choose your plan</Label>
                  <Select
                    name={field.name}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger
                      aria-invalid={fieldState.invalid}
                      className="w-full cursor-pointer truncate"
                    >
                      <SelectValue placeholder="Select workout plan" />
                    </SelectTrigger>
                    <SelectContent>
                      {workoutPlans.map((plan) => (
                        <SelectItem key={plan.id} value={plan.id}>
                          <span className="max-w-[60dvw] truncate">
                            {plan.name} - {plan.totalSessions} workout sessions
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            />
            {plan ? (
              <PlanCard displayWeekPattern isPreview plan={plan} />
            ) : (
              <div className="card flex w-full items-center justify-center gap-2 p-6 py-10 text-muted-foreground">
                <Clipboard className="size-4" /> No plan selected
              </div>
            )}
            <FormField
              control={form.control}
              name="date"
              render={({ field, fieldState }) => (
                <div className="grid gap-3">
                  <Label htmlFor="date">Your first workout begins on</Label>
                  <DatePicker
                    invalid={fieldState.invalid}
                    onChange={field.onChange}
                    value={field.value}
                  />
                </div>
              )}
            />
            <Button className="w-full md:w-40" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
