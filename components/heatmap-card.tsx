"use client";

import { format, isSameDay, parseISO } from "date-fns";
import { lazy, Suspense, useState } from "react";
import type { WorkoutSession } from "@/lib/mockData/workout-sessions";
import { routes } from "@/lib/navigation-items";
import { cn } from "@/lib/utils";
import { CardHeader } from "./common/card-header";
import { WorkoutSessionList } from "./workout-session-list";

type HeatmapCardProps = {
  workouts: WorkoutSession[];
  isPreview?: boolean;
};

const Heatmap = lazy(() => import("./heatmap"));

export function HeatmapCard({ workouts, isPreview = false }: HeatmapCardProps) {
  const [selectedDay, setSelectedDay] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  function onDayClick(day: string) {
    setSelectedDay(day);
  }

  const selectedWorkouts = workouts.filter((w) =>
    isSameDay(parseISO(w.date), parseISO(selectedDay))
  );

  return (
    <div className="card overflow-hidden">
      <CardHeader link={routes.WORKOUT_SESSIONS} title="Heatmap" />
      <div className={cn("flex w-full justify-center p-6")}>
        <Suspense
          fallback={
            <div className="flex h-48 items-center justify-center text-gray-500">
              Loading heatmap...
            </div>
          }
        >
          <Heatmap
            onDayClick={isPreview ? undefined : onDayClick}
            selectedDay={isPreview ? undefined : selectedDay}
            workouts={workouts}
          />
        </Suspense>
      </div>
      {!isPreview && (
        <div className="border-t">
          <p className="p-6 font-semibold">
            Sessions on {format(selectedDay, "EEEE, MMM do, yyyy")}
          </p>
          <WorkoutSessionList workouts={selectedWorkouts} />
        </div>
      )}
    </div>
  );
}
