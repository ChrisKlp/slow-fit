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

export function WorkoutList() {
  return (
    <div className="grid items-center">
      {workouts.map((workout, index) => (
        <Link
          className="grid grid-cols-4 items-center gap-4 rounded-lg p-3 text-sm transition-colors hover:bg-accent"
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
          <span className="justify-self-end">
            <Link
              className="text-blue-200 text-link transition-colors hover:text-blue-50"
              href={"/program/#"}
            >
              {workout.program}
            </Link>
          </span>
          <span className="justify-self-end text-muted-foreground">
            {workout.date}
          </span>
        </Link>
      ))}
    </div>
  );
}
