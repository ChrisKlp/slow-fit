import Link from "next/link";
import { CardHeader } from "@/components/common/card-header";
import { Badge } from "@/components/ui/badge";
import { routes } from "@/lib/navigation-items";
import type { WorkoutWithWorkoutExercises } from "../types";

type WorkoutListProps = {
  title: string;
  link?: string;
  workouts: WorkoutWithWorkoutExercises[];
  numbered?: boolean;
};

const numberColumnWidth = "w-5";

export function WorkoutList({ title, link, workouts }: WorkoutListProps) {
  return (
    <div className="card overflow-hidden p-0">
      <CardHeader link={link} title={title} />
      <div className="grid items-center">
        <div className="grid grid-cols-5 items-center gap-4 bg-muted px-6 py-3 text-muted-foreground text-sm">
          <div className="col-span-3 flex items-center gap-4">
            <span className={numberColumnWidth}>No.</span>
            <span>Name</span>
          </div>
          <span>Exercises</span>
          <span>Tags</span>
        </div>
        {workouts.map((workout, idx) => (
          <Link
            className="grid grid-cols-5 items-center gap-4 border-b p-3 px-6 text-sm transition-colors last:border-b-0 hover:bg-muted/70"
            href={`${routes.WORKOUTS}/${workout.id}`}
            key={`${workout.id}-${idx}`}
          >
            <div className="col-span-3 flex items-center gap-4">
              <span className={numberColumnWidth}>{idx + 1}</span>
              <span>{workout.name}</span>
            </div>
            <span>{workout.exercises.length}</span>
            <span>
              {workout.tags?.[0] && (
                <Badge variant="outline">{workout.tags[0]}</Badge>
              )}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
