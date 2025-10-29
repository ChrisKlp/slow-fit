import Link from "next/link";
import type { Workout } from "@/lib/mockData/workouts";
import { routes } from "@/lib/navigation-items";
import { CardHeader } from "./common/card-header";

type WorkoutListProps = {
  title: string;
  link?: string;
  workouts: Workout[];
  numbered?: boolean;
};

const numberColumnWidth = "w-5";

export function WorkoutList({
  title,
  link,
  workouts,
  numbered = false,
}: WorkoutListProps) {
  return (
    <div className="card overflow-hidden p-0">
      <CardHeader link={link} title={title} />
      <div className="grid items-center">
        <div
          className={
            "grid grid-cols-2 items-center gap-4 bg-muted px-6 py-3 text-muted-foreground text-sm"
          }
        >
          {numbered ? (
            <div className="flex items-center gap-4">
              <span className={numberColumnWidth}>No.</span>
              <span>Name</span>
            </div>
          ) : (
            <span>Name</span>
          )}
          <span>Total Exercises</span>
        </div>
        {workouts.map((workout, idx) => (
          <Link
            className="grid grid-cols-2 items-center gap-4 border-b p-3 px-6 text-sm transition-colors last:border-b-0 hover:bg-muted/70"
            href={`${routes.WORKOUTS}/${workout.id}`}
            key={`${workout.id}-${idx}`}
          >
            {numbered ? (
              <div className="flex items-center gap-4">
                <span className={numberColumnWidth}>{idx + 1}</span>
                <span>{workout.name}</span>
              </div>
            ) : (
              <span>{workout.name}</span>
            )}
            <span>{workout.exercises.length}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
