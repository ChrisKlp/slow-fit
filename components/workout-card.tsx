import { Calendar } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { DashboardCard } from "./dashboard-card";

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
    <DashboardCard
      className={cn("", className)}
      link={link}
      title={header}
      variant={variant}
    >
      <Image
        alt={title}
        className="h-40 rounded-lg object-cover"
        height={400}
        src={image}
        width={600}
      />
      <div className="mt-3 grid gap-1">
        <p className="font-semibold">{title}</p>
        <span className="flex items-center gap-2 text-sm">
          <Calendar className="size-4 text-blue-400" /> {date}
        </span>
        <span className="text-sm">{plan}</span>
      </div>
    </DashboardCard>
  );
}
