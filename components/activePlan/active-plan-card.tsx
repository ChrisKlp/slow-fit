import {
  Calendar,
  Dumbbell,
  Hourglass,
  SquareCheckBig,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { InfoItem } from "@/components/common/info-item";
import { Progress } from "@/components/ui/progress";
import type { ActivePlan } from "@/lib/mockData/active-plans";
import { routes } from "@/lib/navigation-items";
import { getProgress } from "@/lib/utils";
import { ActivePlanOptionsMenu } from "./active-plan-options-menu";

type ActivePlanCardProps = {
  plan: ActivePlan;
  headless?: boolean;
};

export function ActivePlanCard({
  plan,
  headless = false,
}: ActivePlanCardProps) {
  const progress = getProgress(plan.completedSessions, plan.totalSessions);
  return (
    <div className="card p-6" key={plan.id}>
      {!headless && (
        <div className="mb-6 flex items-center justify-between">
          <Link href={`${routes.ACTIVE_PLANS}/${plan.id}`}>
            <h2 className="font-semibold text-xl">{plan.name}</h2>
          </Link>
          <ActivePlanOptionsMenu planId={plan.id} />
        </div>
      )}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <InfoItem icon={Calendar} label="Start" value={plan.startDate} />
        <InfoItem icon={Calendar} label="Finish" value={plan.finishDate} />
        <InfoItem icon={Dumbbell} label="Total" value={plan.totalSessions} />
        <InfoItem
          icon={SquareCheckBig}
          label="Completed"
          value={plan.completedSessions}
          variant="secondary"
        />
        <InfoItem
          icon={Hourglass}
          label="Remaining"
          value={plan.remainingSessions}
          variant="primary"
        />
        <InfoItem
          icon={TrendingUp}
          label="Progress"
          value={`${progress}%`}
          variant="secondary"
        />
      </div>
      <Progress className="h-2" value={progress} />
    </div>
  );
}
