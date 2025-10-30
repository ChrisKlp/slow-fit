import { Hourglass, SquareCheckBig, TrendingUp } from "lucide-react";
import { HeatmapCard } from "@/components/heatmap-card";
import { PlanList } from "@/components/plan-list";
import { SmallStat } from "@/components/small-stat";
import { WorkoutCard } from "@/components/workout-card";
import { WorkoutSessionListCard } from "@/components/workout-session-list";
import { activePlans } from "@/lib/mockData/active-plans";
import { workoutPlans } from "@/lib/mockData/workout-plans";
import {
  allFutureSessions,
  allPastSessions,
  allWorkoutSessions,
  type WorkoutSession,
} from "@/lib/mockData/workout-sessions";
import { routes } from "@/lib/navigation-items";

export default function HomePage() {
  const lastWorkoutSession = allPastSessions[0];
  const nextWorkoutSession = allFutureSessions[0];

  function getWorkoutPlanImageSrc(workout: WorkoutSession) {
    const activePlan = activePlans.find((p) => p.id === workout.activePlanId);
    return workoutPlans.find((p) => p.id === activePlan?.workoutPlanId)
      ?.coverImage;
  }

  return (
    <div className="grid items-start gap-4 md:grid-cols-3 md:gap-6">
      <div className="order-2 grid grid-cols-3 gap-4 md:order-1 md:col-span-2">
        <SmallStat
          content="20"
          description="To Go"
          Icon={Hourglass}
          variant="primary"
        />
        <SmallStat content="15" description="Completed" Icon={SquareCheckBig} />
        <SmallStat
          content="46%"
          description="Progress"
          Icon={TrendingUp}
          variant="teal"
        />
        <div className="col-span-3 grid gap-4">
          <HeatmapCard isPreview workouts={allWorkoutSessions} />
          <WorkoutSessionListCard
            hiddenPlanForMobile={false}
            hiddenStatusForMobile={true}
            title="Scheduled Workouts"
            workouts={allFutureSessions.slice(0, 5)}
          />
          <WorkoutSessionListCard
            hiddenPlanForMobile={false}
            hiddenStatusForMobile={true}
            title="History"
            workouts={allPastSessions.slice(0, 5)}
          />
        </div>
      </div>
      <div className="order-1 grid gap-4 md:order-2 md:col-span-1">
        <PlanList
          link={routes.ACTIVE_PLANS}
          plans={activePlans}
          title="Active Plans"
        />
        <WorkoutCard
          imageSrc={getWorkoutPlanImageSrc(nextWorkoutSession) ?? ""}
          title="Next workout"
          variant="accent"
          workout={nextWorkoutSession}
        />
        <WorkoutCard
          imageSrc={getWorkoutPlanImageSrc(lastWorkoutSession) ?? ""}
          title="Last workout"
          workout={lastWorkoutSession}
        />
      </div>
    </div>
  );
}
