import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/lib/mockData/workouts";
import { CardHeader } from "./card-header";

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
        <div className="grid grid-cols-4 items-center gap-4 bg-muted px-6 py-3 text-muted-foreground text-sm">
          <span className="col-span-2">Name</span>
          <span>Plan</span>
          <span>Date</span>
        </div>
        {workouts.map((workout, index) => (
          <Link
            className="grid grid-cols-4 items-center gap-4 border-b p-3 px-6 text-sm transition-colors last:border-b-0 hover:bg-muted/70"
            href={`/workout/${workout.title}`}
            key={`${workout.title}-${index}`}
          >
            <div className="col-span-2 flex items-center gap-4">
              <Image
                alt={workout.title}
                className="size-8 rounded-full"
                height={100}
                src={workout.image}
                width={100}
              />
              <span>{workout.title}</span>
            </div>
            <span>
              <Link className="text-link" href={"/program/#"}>
                {workout.program}
              </Link>
            </span>
            <span className="text-muted-foreground">{workout.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
