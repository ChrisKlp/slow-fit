import { notFound } from "next/navigation";
import { PageHeader } from "@/components/common/page-header";
import { ExerciseList } from "@/components/exercise-list";
import { ExerciseVideoList } from "@/components/exercise-video-list";
import { SingleWorkoutOptionsMenu } from "@/components/workout/workout-opions-menu";
import { exercises } from "@/lib/mockData/exercises";
import { workouts } from "@/lib/mockData/workouts";
import { routes } from "@/lib/navigation-items";

type SingleWorkoutPageProps = {
  params: Promise<{ id: string }>;
};

export default async function SingleWorkoutPage({
  params,
}: SingleWorkoutPageProps) {
  const { id } = await params;
  const workout = workouts.find((p) => p.id === id);

  if (!workout) {
    notFound();
  }

  const plannedExercises = workout?.exercises.map((e) => ({
    ...e,
    exercise: exercises.find((ex) => ex.id === e.exerciseId),
  }));

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { title: "Available Workouts", href: routes.WORKOUTS },
          { title: workout.name },
        ]}
        title={workout.name}
      >
        <SingleWorkoutOptionsMenu workout={workout.id} />
      </PageHeader>
      <div className="space-y-6">
        {workout &&
          plannedExercises &&
          plannedExercises.length > 0 &&
          (plannedExercises.length > 1 ? (
            <ExerciseList exercises={plannedExercises} />
          ) : (
            plannedExercises[0].exercise && (
              <>
                <ExerciseList exercises={plannedExercises} />
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
