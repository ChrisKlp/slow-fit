import Link from "next/link";
import type { Workout } from "@/lib/mockData/workouts";
import { routes } from "@/lib/navigation-items";
import { CardHeader } from "./common/card-header";

type WorkoutListProps = {
  title: string;
  link?: string;
  workouts: Workout[];
};

export function WorkoutList({ title, link, workouts }: WorkoutListProps) {
  return (
    <div className="card overflow-hidden p-0">
      <CardHeader link={link} title={title} />
      <div className="grid items-center">
        <div className="grid grid-cols-2 items-center gap-4 bg-muted px-6 py-3 text-muted-foreground text-sm">
          <span>Name</span>
          <span>Total Exercises</span>
        </div>
        {workouts.map((workout, idx) => (
          <Link
            className="grid grid-cols-2 items-center gap-4 border-b p-3 px-6 text-sm transition-colors last:border-b-0 hover:bg-muted/70"
            href={`${routes.WORKOUTS}/${workout.id}`}
            key={`${workout.id}-${idx}`}
          >
            <span className="flex items-center gap-4">{workout.name}</span>
            <span>{workout.exercises.length}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
