import { PageHeader } from "@/components/common/page-header";
import { HeatmapCard } from "@/components/heatmap-card";
import { WorkoutSessionListCard } from "@/components/workout-session-list";
import { allWorkoutSessions } from "@/lib/mockData/workout-sessions";

export default function WorkoutSessionsPage() {
  const sortedWorkouts = allWorkoutSessions.sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  const pageTitle = "Workout Sessions";
  return (
    <>
      <PageHeader breadcrumbs={[{ title: pageTitle }]} title={pageTitle} />
      <div className="grid space-y-6">
        <HeatmapCard workouts={sortedWorkouts} />
        <WorkoutSessionListCard title="Sessions" workouts={sortedWorkouts} />
      </div>
    </>
  );
}
