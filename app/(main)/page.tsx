import { Hourglass, SquareCheckBig, TrendingUp } from "lucide-react";
import { DashboardCard } from "@/components/dashboard-card";
import { SmallStat } from "@/components/small-stat";
import { WorkoutCard } from "@/components/workout-card";
import { WorkoutList } from "@/components/workout-list";

export default function HomePage() {
  return (
    <div className="grid grid-cols-3 items-start gap-6">
      <div className="col-span-2 grid grid-cols-3 gap-4">
        <SmallStat content="15" Icon={SquareCheckBig} title="Completed" />
        <SmallStat content="20" Icon={Hourglass} title="To Go" />
        <SmallStat content="46%" Icon={TrendingUp} title="Progress" />
        <div className="col-span-3 rounded-2xl border bg-card p-4">
          Weekly Schedule
        </div>
        <DashboardCard className="col-span-3" title="Workout List">
          <WorkoutList />
        </DashboardCard>
      </div>
      <div className="col-span-1 grid gap-4">
        <div className="rounded-2xl border bg-card p-4">Active Plans</div>
        <WorkoutCard
          date="2025-03-01"
          header="Next workout"
          image="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1600"
          link="workout/#"
          plan="StrongLifts"
          title="Full body workout"
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
