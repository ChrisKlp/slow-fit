import { notFound } from "next/navigation";
import { PageHeader } from "@/components/common/page-header";
import { ExerciseVideoList } from "@/components/exercise-video-list";
import { SingleWorkoutOptionsMenu } from "@/components/workout/workout-opions-menu";
import { WorkoutExerciseList } from "@/components/workout-exercise-list";
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

  const workoutExercises = workout?.exercises.map((e) => ({
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
          workoutExercises &&
          workoutExercises.length > 0 &&
          (workoutExercises.length > 1 ? (
            <WorkoutExerciseList exercises={workoutExercises} />
          ) : (
            workoutExercises[0].exercise && (
              <>
                <WorkoutExerciseList exercises={workoutExercises} />
                <ExerciseVideoList
                  exercise={workoutExercises[0].exercise}
                  headless
                />
              </>
            )
          ))}
      </div>
    </>
  );
}
