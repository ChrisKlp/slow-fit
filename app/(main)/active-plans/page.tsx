import {
  Calendar,
  Dumbbell,
  Hourglass,
  Plus,
  SquareCheckBig,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { InfoItem } from "@/components/common/info-item";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { activePlans } from "@/lib/active-plans";
import { routes } from "@/lib/navigation-items";
import { ActivePlanMoreMenu } from "./active-plan-more-menu";

export default function ActivePlansPage() {
  return (
    <>
      <PageHeader subTitle="Manage your active plans" title="Active Plans">
        <Button variant="outline">
          <Plus />
          Add Plan
        </Button>
      </PageHeader>
      <div className="grid gap-6">
        {activePlans.map((plan) => {
          const progress = Math.round(
            (plan.completedSessions / plan.totalSessions) * 100
          );
          return (
            <div className="card p-6" key={plan.id}>
              <div className="mb-6 flex items-center justify-between">
                <Link href={`${routes.ACTIVE_PLANS}/${plan.id}`}>
                  <h2 className="font-semibold text-xl">{plan.name}</h2>
                </Link>
                <ActivePlanMoreMenu planId={plan.id} />
              </div>
              <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <InfoItem
                  icon={Calendar}
                  label="Start"
                  value={plan.startDate}
                />
                <InfoItem
                  icon={Calendar}
                  label="Finish"
                  value={plan.finishDate}
                />
                <InfoItem
                  icon={Dumbbell}
                  label="Total"
                  value={plan.totalSessions}
                />
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
        })}
      </div>
    </>
  );
}
