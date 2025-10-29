import { Activity, Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import { InfoItem } from "@/components/common/info-item";
import { PageHeader } from "@/components/common/page-header";
import { StatusInfoItem } from "@/components/common/status-info-item";
import { ExerciseVideoList } from "@/components/exercise-video-list";
import { WorkoutExerciseList } from "@/components/workout-exercise-list";
import { CompleteSessionButton } from "@/components/workoutSession/complete-session-button";
import { SingleSessionOptionsMenu } from "@/components/workoutSession/workout-session-opions-menu";
import { exercises } from "@/lib/mockData/exercises";
import { allWorkoutSessions } from "@/lib/mockData/workout-sessions";
import { workouts } from "@/lib/mockData/workouts";
import { routes } from "@/lib/navigation-items";

type SingleWorkoutSessionPageProps = {
  params: Promise<{ id: string }>;
};

export default async function SingleWorkoutSessionPage({
  params,
}: SingleWorkoutSessionPageProps) {
  const { id } = await params;
  const workoutSession = allWorkoutSessions.find((p) => p.id === id);

  if (!workoutSession) {
    notFound();
  }

  const currentWorkout = workouts.find(
    (w) => w.id === workoutSession.workoutId
  );

  const plannedExercises = currentWorkout?.exercises.map((e) => ({
    ...e,
    exercise: exercises.find((ex) => ex.id === e.exerciseId),
  }));

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { title: "Active Plans", href: routes.ACTIVE_PLANS },
          {
            title: workoutSession.planName,
            href: `/active-plans/${workoutSession.activePlanId}`,
          },
          { title: workoutSession.name },
        ]}
        title={workoutSession.name}
      >
        <div className="flex items-center gap-2">
          {workoutSession.status !== "completed" && (
            <CompleteSessionButton sessionId={workoutSession.id} />
          )}
          <SingleSessionOptionsMenu sessionId={workoutSession.id} />
        </div>
      </PageHeader>
      <div className="space-y-6">
        <div className="card grid grid-cols-2 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoItem
            icon={Activity}
            label="Plan"
            link={`${routes.ACTIVE_PLANS}/${workoutSession.activePlanId}`}
            value={workoutSession.planName}
          />
          <InfoItem icon={Calendar} label="Date" value={workoutSession.date} />
          <StatusInfoItem status={workoutSession.status} />
        </div>
        {currentWorkout &&
          plannedExercises &&
          plannedExercises.length > 0 &&
          (plannedExercises.length > 1 ? (
            <WorkoutExerciseList exercises={plannedExercises} />
          ) : (
            plannedExercises[0].exercise && (
              <>
                <WorkoutExerciseList exercises={plannedExercises} />
                <ExerciseVideoList
                  exercise={plannedExercises[0].exercise}
                  headless
                />
              </>
            )
          ))}
      </div>
    </>
  );
}
