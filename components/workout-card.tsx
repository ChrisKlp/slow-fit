import { Calendar } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CardHeader } from "./card-header";

type WorkoutCardProps = {
  header: string;
  title: string;
  date: string;
  plan: string;
  image: string;
  link?: string;
  className?: string;
  variant?: "default" | "accent";
};

export function WorkoutCard({
  header,
  title,
  date,
  plan,
  image,
  link,
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
      <CardHeader link={link} title={header} />
      <div>
        <Image
          alt={title}
          className="h-40 object-cover"
          height={400}
          src={image}
          width={600}
        />
        <div className="grid gap-1 p-6">
          <span
            className={cn(
              "text-muted-foreground text-sm",
              variant === "accent" && "text-blue-300"
            )}
          >
            {plan}
          </span>
          <p className="font-semibold">{title}</p>
          <span className="flex items-center gap-2 text-sm">
            <Calendar className="size-4 text-blue-400" /> {date}
          </span>
        </div>
      </div>
    </div>
  );
}
