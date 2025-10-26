import Image from "next/image";
import Link from "next/link";

const workouts = [
  {
    title: "Full body workout",
    date: "2025-03-01",
    program: "StrongLifts",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1600",
  },
  {
    title: "Upper body workout",
    date: "2025-03-02",
    program: "Workout Buddies",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600",
  },
  {
    title: "Lower body workout",
    date: "2025-03-03",
    program: "Lazy Body",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600",
  },
  {
    title: "Full body workout",
    date: "2025-03-01",
    program: "StrongLifts",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1600",
  },
  {
    title: "Upper body workout",
    date: "2025-03-02",
    program: "Workout Buddies",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600",
  },
  {
    title: "Lower body workout",
    date: "2025-03-03",
    program: "Lazy Body",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600",
  },
  {
    title: "Full body workout",
    date: "2025-03-01",
    program: "StrongLifts",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1600",
  },
  {
    title: "Upper body workout",
    date: "2025-03-02",
    program: "Workout Buddies",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600",
  },
  {
    title: "Lower body workout",
    date: "2025-03-03",
    program: "Lazy Body",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600",
  },
];

type WorkoutListProps = {
  title: string;
};

export function WorkoutList({ title }: WorkoutListProps) {
  return (
    <div className="card overflow-hidden p-0">
      <p className="border-b p-6 font-semibold">{title}</p>
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
