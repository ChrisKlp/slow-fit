import { notFound } from "next/navigation";
import { PageHeader } from "@/components/common/page-header";
import { WorkoutExerciseList } from "@/components/workout-exercise-list";
import { ExerciseVideoList } from "@/features/exercises/components/exercise-video-list";
import { getWorkout } from "@/features/workouts/actions/workout-actions";
import { SingleWorkoutOptionsMenu } from "@/features/workouts/components/workout-opions-menu";
import { routes } from "@/lib/navigation-items";

type SingleWorkoutPageProps = {
  params: Promise<{ id: string }>;
};

export default async function SingleWorkoutPage({
  params,
}: SingleWorkoutPageProps) {
  const { id } = await params;
  const { data: workout, error } = await getWorkout(id);

  if (!workout || error) {
    notFound();
  }

  const isSingleWorkout = workout.exercises.length === 1;

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
        {workout.exercises.length > 0 && (
          <>
            <WorkoutExerciseList workoutExercises={workout.exercises} />
            {isSingleWorkout && (
              <ExerciseVideoList
                exercise={workout.exercises[0].exercise}
                headless
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
