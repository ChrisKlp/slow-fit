import { Calendar, Dumbbell, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InfoItem } from "@/components/common/info-item";
import type { WorkoutPlan } from "@/lib/mockData/workout-plans";
import { routes } from "@/lib/navigation-items";
import { cn, getWeeksNumber } from "@/lib/utils";
import { PlanOptionsMenu } from "./plan-options-menu";

type PlanCardProps = {
  plan: WorkoutPlan;
  headless?: boolean;
};

export function PlanCard({ plan, headless = false }: PlanCardProps) {
  return (
    <div className="card flex overflow-hidden" key={plan.id}>
      <Image
        alt={plan.name}
        className="w-50 object-cover"
        height={200}
        src={plan.coverImage}
        width={300}
      />
      <div className={cn("w-full p-6", headless && "grid")}>
        {!headless && (
          <div className="mb-6 flex items-center justify-between">
            <Link href={`${routes.PLANS}/${plan.id}`}>
              <h2 className="font-semibold text-xl">{plan.name}</h2>
            </Link>
            <PlanOptionsMenu planId={plan.id} />
          </div>
        )}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <InfoItem
            icon={Dumbbell}
            label="Total Workouts"
            value={plan.totalSessions}
          />
          <InfoItem
            icon={Layers}
            label="Unique workouts"
            value={plan.workouts.length}
            variant="secondary"
          />
          <InfoItem
            icon={Calendar}
            label="Weeks"
            value={getWeeksNumber(plan.totalSessions, plan.weekPattern)}
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
}
