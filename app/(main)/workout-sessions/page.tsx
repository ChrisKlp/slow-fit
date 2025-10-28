import { PageHeader } from "@/components/page-header";
import { WorkoutSessionList } from "@/components/workout-session-list";
import { allWorkoutSessions } from "@/lib/mockData/workout-sessions";

export default function WorkoutSessionsPage() {
  const sortedWorkouts = allWorkoutSessions.sort((a, b) =>
    a.date.localeCompare(b.date)
  );
  return (
    <>
      <PageHeader
        subTitle="All your planned and completed workouts"
        title="Workout Sessions"
      />
      <WorkoutSessionList title="Sessions" workouts={sortedWorkouts} />
    </>
  );
}
