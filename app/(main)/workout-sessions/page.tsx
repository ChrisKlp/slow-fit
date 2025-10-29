import { PageHeader } from "@/components/common/page-header";
import { Heatmap } from "@/components/heatmap";
import { WorkoutSessionList } from "@/components/workout-session-list";
import { allWorkoutSessions } from "@/lib/mockData/workout-sessions";

export default function WorkoutSessionsPage() {
  const sortedWorkouts = allWorkoutSessions.sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  const pageTitle = "Workout Sessions";

  return (
    <>
      <PageHeader breadcrumbs={[{ title: pageTitle }]} title={pageTitle} />
      <div className="space-y-6">
        <Heatmap workouts={sortedWorkouts} />
        <WorkoutSessionList title="Sessions" workouts={sortedWorkouts} />
      </div>
    </>
  );
}
