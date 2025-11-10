import { notFound } from "next/navigation";
import { PageHeader } from "@/components/common/page-header";
import { PlanCard } from "@/components/plans/plan-card";
import { SinglePlanOptionsMenu } from "@/components/plans/plan-options-menu";
import { WorkoutList } from "@/components/workout-list";
import { workoutPlans } from "@/lib/mockData/workout-plans";
import { workouts } from "@/lib/mockData/workouts";
import { routes } from "@/lib/navigation-items";

type SinglePlanPageProps = {
  params: Promise<{ id: string }>;
};

export default async function SinglePlanPage({ params }: SinglePlanPageProps) {
  const { id } = await params;
  const plan = workoutPlans.find((p) => p.id === id);

  if (!plan) {
    notFound();
  }

  const workoutList = plan.workouts
    .map((planWorkout) => workouts.find((w) => w.id === planWorkout))
    .filter((w) => w !== undefined);

  const scheduledWorkouts = plan.schedule
    .map((planWorkout) => workouts.find((w) => w.id === planWorkout))
    .filter((w) => w !== undefined);

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { title: "Available Workout Plans", href: routes.PLANS },
          { title: plan.name },
        ]}
        title={plan.name}
      >
        <SinglePlanOptionsMenu planId={plan.id} />
      </PageHeader>
      <div className="space-y-6">
        <PlanCard displayWeekPattern headless plan={plan} />
        <WorkoutList title="Workout list" workouts={workoutList} />
        <WorkoutList title="Schedule list" workouts={scheduledWorkouts} />
      </div>
    </>
  );
}
