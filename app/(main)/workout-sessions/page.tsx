import { PageHeader } from "@/components/page-header";
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
      <WorkoutSessionList title="Sessions" workouts={sortedWorkouts} />
    </>
  );
}
