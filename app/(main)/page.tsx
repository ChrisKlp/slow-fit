import { Hourglass, SquareCheckBig, TrendingUp } from "lucide-react";
import { DashboardCard } from "@/components/dashboard-card";
import { SmallStat } from "@/components/small-stat";
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
        <div className="rounded-2xl border bg-card p-4">Profile</div>
        <div className="rounded-2xl border bg-card p-4">Next workout</div>
        <div className="rounded-2xl border bg-card p-4">Last workouts</div>
      </div>
    </div>
  );
}
