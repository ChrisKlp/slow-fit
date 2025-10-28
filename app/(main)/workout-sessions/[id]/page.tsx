import { Activity, Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import { InfoItem } from "@/components/common/info-item";
import { StatusInfoItem } from "@/components/common/status-info-item";
import { YoutubeCard } from "@/components/common/youtube-card";
import { PageHeader } from "@/components/page-header";
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
      <PageHeader subTitle="Workout Session" title={workoutSession.name}>
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
            <div className="card p-6">
              <h3 className="mb-4 font-bold text-xl">Planned Exercises</h3>
              <ul>
                {plannedExercises.map((plannedExercise) => (
                  <li key={plannedExercise.exerciseId}>
                    {plannedExercise.exercise?.name} - {plannedExercise.sets}{" "}
                    sets of {plannedExercise.reps} reps
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="card p-6">
              <h3 className="mb-4 font-bold text-xl">
                {plannedExercises[0].exercise?.name}
              </h3>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {plannedExercises[0].exercise?.videoUrl && (
                  <YoutubeCard
                    description={plannedExercises[0].exercise?.description}
                    title={plannedExercises[0].exercise?.name}
                    videoUrl={plannedExercises[0].exercise?.videoUrl}
                  />
                )}
                {plannedExercises[0].exercise?.extraVideos?.[0] && (
                  <YoutubeCard
                    description="Exercise with description"
                    title="Description"
                    videoUrl={plannedExercises[0].exercise?.extraVideos?.[0]}
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
