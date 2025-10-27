import Image from "next/image";
import Link from "next/link";
import type { WorkoutSession } from "@/lib/mockData/workout-sessions";
import { workouts as workoutsList } from "@/lib/mockData/workouts";
import { CardHeader } from "./common/card-header";

type WorkoutSessionListProps = {
  title: string;
  link?: string;
  workouts: WorkoutSession[];
};

export function WorkoutSessionList({
  title,
  link,
  workouts,
}: WorkoutSessionListProps) {
  return (
    <div className="card overflow-hidden p-0">
      <CardHeader link={link} title={title} />
      <div className="grid items-center">
        <div className="grid grid-cols-4 items-center gap-4 bg-muted px-6 py-3 text-muted-foreground text-sm">
          <span className="col-span-2">Name</span>
          <span>Plan</span>
          <span>Date</span>
        </div>
        {workouts.map((workout) => (
          <Link
            className="grid grid-cols-4 items-center gap-4 border-b p-3 px-6 text-sm transition-colors last:border-b-0 hover:bg-muted/70"
            href={`/workout/${workout.name}`}
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
            <span>
              <span>{workout.planName}</span>
            </span>
            <span className="text-muted-foreground">{workout.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
