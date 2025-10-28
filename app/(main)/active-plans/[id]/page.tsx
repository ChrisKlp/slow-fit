import { notFound } from "next/navigation";
import { ActivePlanCard } from "@/components/activePlan/active-plan-card";
import { SingleActivePlanOptionsMenu } from "@/components/activePlan/active-plan-options-menu";
import { PageHeader } from "@/components/page-header";
import { WorkoutSessionList } from "@/components/workout-session-list";
import { activePlans } from "@/lib/mockData/active-plans";

type ActivePlanPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ActivePlanPage({ params }: ActivePlanPageProps) {
  const { id } = await params;
  const activePlan = activePlans.find((p) => p.id === id);

  if (!activePlan) {
    notFound();
  }

  const sortedWorkouts = activePlan.workoutSessions.sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  return (
    <>
      <PageHeader subTitle="Active plan" title={activePlan.name}>
        <SingleActivePlanOptionsMenu planId={activePlan.id} />
      </PageHeader>
      <div className="space-y-6">
        <ActivePlanCard headless plan={activePlan} />
        <WorkoutSessionList
          title="Workout sessions"
          workouts={sortedWorkouts}
        />
      </div>
    </>
  );
}
