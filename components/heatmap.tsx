/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
"use client";

import {
  addDays,
  format,
  getDate,
  getMonth,
  isBefore,
  isSameDay,
  isToday,
} from "date-fns";
import { useEffect, useMemo, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { dayLetters } from "@/constants/calendar";
import { getSurroundingMonthsPeriod } from "@/lib/calendar-utils";
import type {
  WorkoutSession,
  WorkoutSessionStatus,
} from "@/lib/mockData/workout-sessions";
import { cn } from "@/lib/utils";

type HeatmapProps = {
  workouts: WorkoutSession[];
  selectedDay?: string;
  onDayClick?: (day: string) => void;
};

export default function Heatmap({
  workouts,
  selectedDay,
  onDayClick,
}: HeatmapProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { weeks, workoutMap, monthLabels } = useMemo(() => {
    const { endDate, firstSunday } = getSurroundingMonthsPeriod(6);

    // Create workout map for quick lookup
    const map = new Map<string, WorkoutSessionStatus>();

    for (const w of workouts) {
      map.set(w.date, w.status);
    }

    // Generate weeks array
    const weeksData: Date[][] = [];
    const monthLabelsData: { week: number; label: string }[] = [];
    let currentDate = firstSunday;
    let weekIndex = 0;
    let lastMonth = -1;

    while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
      const week: Date[] = [];

      // Check if this is the first week of a new month
      const monthOfFirstDay = getMonth(currentDate);
      const dateNumber = getDate(currentDate);
      if (monthOfFirstDay !== lastMonth && dateNumber <= 7) {
        monthLabelsData.push({
          week: weekIndex,
          label: format(currentDate, "MMM"),
        });
        lastMonth = monthOfFirstDay;
      }

      // Add 7 days to the week
      for (let i = 0; i < 7; i++) {
        week.push(currentDate);
        currentDate = addDays(currentDate, 1);
      }

      weeksData.push(week);
      weekIndex++;
    }

    return { weeks: weeksData, workoutMap: map, monthLabels: monthLabelsData };
  }, [workouts]);

  const getDayStatus = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return workoutMap.get(dateStr);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const middle = (el.scrollWidth - el.clientWidth) / 2;
      el.scrollLeft = middle;
    }
  }, []);

  return (
    <TooltipProvider>
      <div className="flex items-end overflow-x-auto pb-4" ref={scrollRef}>
        {/* Day labels */}
        <div
          className={cn(
            "sticky left-0 h-full content-end space-y-1 pr-2",
            "bg-card"
          )}
        >
          {dayLetters.map((dayLabel, index) => (
            <span
              className="flex h-4 items-center text-muted-foreground text-xs"
              key={`${dayLabel}-${index}`}
            >
              {dayLabel}
            </span>
          ))}
        </div>

        {/* Heatmap grid */}
        <div className="space-y-2">
          {/* Month labels */}
          <div className="flex items-end gap-1">
            {weeks.map((_, weekIdx) => {
              const monthLabel = monthLabels.find((m) => m.week === weekIdx);
              return (
                <div className="w-4 shrink-0" key={weekIdx}>
                  {monthLabel && (
                    <span className="font-medium text-muted-foreground text-xs">
                      {monthLabel.label}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Weeks (columns) */}
          <div className="flex gap-1">
            {weeks.map((week, weekIdx) => (
              <div className="grid gap-1" key={weekIdx}>
                {week.map((date, dayIdx) => {
                  const status = getDayStatus(date);
                  const today = isToday(date);
                  const dateStr = format(date, "yyyy-MM-dd");
                  const isSelected = selectedDay === dateStr;
                  return (
                    <Tooltip delayDuration={0} key={dayIdx}>
                      <TooltipTrigger asChild>
                        <button
                          className={cn(
                            "size-4 cursor-pointer rounded-xs border border-border bg-muted/30 transition-all hover:ring-2 hover:ring-foreground/50",
                            {
                              "bg-teal-500/80": status === "completed",
                              "bg-blue-500/80": status === "scheduled",
                              "bg-red-500/30": status === "missed",
                            },
                            today && "ring-2 ring-foreground/50",
                            isSelected && "ring-2 ring-foreground"
                          )}
                          onClick={() => {
                            onDayClick?.(dateStr);
                          }}
                          type="button"
                        />
                      </TooltipTrigger>
                      <TooltipContent className="grid">
                        <span>{dateStr}</span>
                        {status && (
                          <span className="font-semibold">{status}</span>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
