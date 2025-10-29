import { Calendar } from "lucide-react";
import Image from "next/image";
import type { WorkoutSession } from "@/lib/mockData/workout-sessions";
import { routes } from "@/lib/navigation-items";
import { cn } from "@/lib/utils";
import { CardHeader } from "./common/card-header";

type WorkoutCardProps = {
  title: string;
  workout: WorkoutSession;
  imageSrc: string;
  className?: string;
  variant?: "default" | "accent";
};

export function WorkoutCard({
  title,
  workout,
  imageSrc,
  className,
  variant = "default",
}: WorkoutCardProps) {
  return (
    <div
      className={cn(
        "card",
        variant === "accent" && "border-0 bg-blue-800",
        className
      )}
    >
      <CardHeader
        link={`${routes.WORKOUT_SESSIONS}/${workout.id}`}
        title={title}
      />
      <div>
        <Image
          alt={workout.name}
          className="h-40 object-cover"
          height={400}
          src={imageSrc}
          width={600}
        />
        <div className="grid gap-1 p-6">
          <span
            className={cn(
              "text-muted-foreground text-sm",
              variant === "accent" && "text-blue-300"
            )}
          >
            {workout.planName}
          </span>
          <p className="font-semibold">{workout.name}</p>
          <span className="flex items-center gap-2 text-sm">
            <Calendar className="size-4 text-blue-400" /> {workout.date}
          </span>
        </div>
      </div>
    </div>
  );
}
