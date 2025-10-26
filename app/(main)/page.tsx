import { Hourglass, SquareCheckBig, TrendingUp } from "lucide-react";
import { PlanList } from "@/components/plan-list";
import { SmallStat } from "@/components/small-stat";
import { WorkoutCard } from "@/components/workout-card";
import { WorkoutList } from "@/components/workout-list";
import { plans } from "@/lib/mockData/plans";
import { workouts } from "@/lib/mockData/workouts";

export default function HomePage() {
  return (
    <div className="grid grid-cols-3 items-start gap-6">
      <div className="col-span-2 grid grid-cols-3 gap-4">
        <SmallStat
          content="15"
          description="Completed"
          Icon={SquareCheckBig}
          variant="primary"
        />
        <SmallStat content="20" description="To Go" Icon={Hourglass} />
        <SmallStat
          content="46%"
          description="Progress"
          Icon={TrendingUp}
          variant="teal"
        />
        <div className="col-span-3 rounded-2xl border bg-card p-4">
          Weekly Schedule
        </div>
        <div className="col-span-3">
          <WorkoutList
            link="history/#"
            title="Scheduled Workouts"
            workouts={workouts.slice(0, 3)}
          />
        </div>
        <div className="col-span-3">
          <WorkoutList link="history/#" title="History" workouts={workouts} />
        </div>
      </div>
      <div className="col-span-1 grid gap-4">
        <PlanList link="plans/#" plans={plans} title="Active Plans" />
        <WorkoutCard
          date="2025-03-01"
          header="Next workout"
          image="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1600"
          link="workout/#"
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
