import { CircleOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type {
  WorkoutSession,
  WorkoutSessionStatus,
} from "@/lib/mockData/workout-sessions";
import { workouts as workoutsList } from "@/lib/mockData/workouts";
import { routes } from "@/lib/navigation-items";
import { cn } from "@/lib/utils";
import { CardHeader } from "./common/card-header";
import { Badge } from "./ui/badge";

type WorkoutSessionListCardProps = {
  title: string;
  link?: string;
} & WorkoutSessionListProps;

export function WorkoutSessionListCard({
  title,
  link,
  workouts,
  hiddenStatusForMobile = false,
  hiddenPlanForMobile = true,
}: WorkoutSessionListCardProps) {
  return (
    <div className="card overflow-hidden p-0">
      <CardHeader link={link} title={title} />
      <WorkoutSessionList
        hiddenPlanForMobile={hiddenPlanForMobile}
        hiddenStatusForMobile={hiddenStatusForMobile}
        workouts={workouts}
      />
    </div>
  );
}

type WorkoutSessionListProps = {
  workouts: WorkoutSession[];
  hiddenStatusForMobile?: boolean;
  hiddenPlanForMobile?: boolean;
};

export function WorkoutSessionList({
  workouts,
  hiddenStatusForMobile = false,
  hiddenPlanForMobile = true,
}: WorkoutSessionListProps) {
  function getBadgeVariant(status: WorkoutSessionStatus) {
    switch (status) {
      case "completed":
        return "success";
      case "scheduled":
        return "primary";
      case "missed":
        return "destructive";
      default:
        return "outline";
    }
  }
  return (
    <div className="grid items-center">
      <div className="grid grid-cols-4 items-center gap-4 bg-muted px-6 py-3 text-muted-foreground text-sm md:grid-cols-5">
        <span className="col-span-2">Name</span>
        <span className={cn({ "hidden md:block": hiddenPlanForMobile })}>
          Plan
        </span>
        <span>Date</span>
        <span className={cn({ "hidden md:block": hiddenStatusForMobile })}>
          Status
        </span>
      </div>
      {workouts.length === 0 && (
        <span className="flex items-center justify-center gap-4 p-5 text-muted-foreground text-sm">
          <CircleOff className="size-4" /> No sessions found
        </span>
      )}
      {workouts.map((workout) => (
        <Link
          className="grid grid-cols-4 items-center gap-4 border-b p-3 px-6 text-sm transition-colors last:border-b-0 hover:bg-muted/70 md:grid-cols-5"
          href={`${routes.WORKOUT_SESSIONS}/${workout.id}`}
          key={workout.id}
        >
          <div className="col-span-2 flex items-center gap-4">
            <Image
              alt={workout.name}
              className="size-8 rounded-full"
              height={100}
              src={
                workoutsList.find((w) => w.id === workout.workoutId)
                  ?.coverImage ?? ""
              }
              width={100}
            />
            <span>{workout.name}</span>
          </div>
          <span className={cn({ "hidden md:block": hiddenPlanForMobile })}>
            <span>{workout.planName}</span>
          </span>
          <span className="text-muted-foreground">{workout.date}</span>
          <span className={cn({ "hidden md:block": hiddenStatusForMobile })}>
            <Badge
              className="text-xs"
              variant={getBadgeVariant(workout.status)}
            >
              <span className="w-full max-w-12 truncate md:max-w-none">
                {workout.status}
              </span>
            </Badge>
          </span>
        </Link>
      ))}
    </div>
  );
}
