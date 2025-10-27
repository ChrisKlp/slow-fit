import { Hourglass, SquareCheckBig, TrendingUp } from "lucide-react";
import { Heatmap } from "@/components/heatmap";
import { PlanList } from "@/components/plan-list";
import { SmallStat } from "@/components/small-stat";
import { WorkoutCard } from "@/components/workout-card";
import { WorkoutSessionList } from "@/components/workout-session-list";
import { activePlans } from "@/lib/mockData/active-plans";
import { allWorkoutSessions } from "@/lib/mockData/workout-sessions";
import { routes } from "@/lib/navigation-items";

export default function HomePage() {
  return (
    <div className="grid grid-cols-3 items-start gap-6">
      <div className="col-span-2 grid grid-cols-3 gap-4">
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
          <Heatmap workouts={allWorkoutSessions} />
          <WorkoutSessionList
            link="history"
            title="Scheduled Workouts"
            workouts={allWorkoutSessions.slice(0, 5)}
          />
          <WorkoutSessionList
            link="history/#"
            title="History"
            workouts={allWorkoutSessions.slice(5, 10)}
          />
        </div>
      </div>
      <div className="col-span-1 grid gap-4">
        <PlanList
          link={routes.ACTIVE_PLANS}
          plans={activePlans}
          title="Active Plans"
        />
        <WorkoutCard
          date="2025-03-01"
          header="Next workout"
          image="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1600"
          link="workout/"
          plan="StrongLifts"
          title="Full body workout"
          variant="accent"
        />
        <WorkoutCard
          date="2025-03-01"
          header="Last workout"
          image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600"
          link="workout/#"
          plan="StrongLifts"
          title="Upper body workout"
        />
      </div>
    </div>
  );
}
