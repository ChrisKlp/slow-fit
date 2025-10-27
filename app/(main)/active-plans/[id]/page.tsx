import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { WorkoutList } from "@/components/workout-list";
import { activePlans } from "@/lib/mockData/active-plans";
import { workouts } from "@/lib/mockData/workouts";
import { routes } from "@/lib/navigation-items";
import { ActivePlanCard } from "../active-plan-card";

type ActivePlanPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ActivePlanPage({ params }: ActivePlanPageProps) {
  const { id } = await params;
  const activePlan = activePlans.find((p) => p.id === id);

  if (!activePlan) {
    notFound();
  }

  return (
    <>
      <PageHeader subTitle="Active plan" title={activePlan.name}>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <Link href={`${routes.ACTIVE_PLANS}/${activePlan.id}/edit`}>
              <Pencil /> Edit plan
            </Link>
          </Button>
          <Button size="icon" variant="destructive">
            <Trash2 />
          </Button>
        </div>
      </PageHeader>
      <div className="space-y-6">
        <ActivePlanCard headless plan={activePlan} />
        <WorkoutList title="Scheduled workouts" workouts={workouts} />
      </div>
    </>
  );
}
