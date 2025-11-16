import { notFound } from "next/navigation";
import { PageHeader } from "@/components/common/page-header";
import { getAllExercises } from "@/features/exercises/actions/exercise-actions";
import { getWorkout } from "@/features/workouts/actions/workout-actions";
import { WorkoutEditForm } from "@/features/workouts/components/form/workout-edit-form";
import { routes } from "@/lib/navigation-items";

type EditWorkoutPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditWorkoutPage({
  params,
}: EditWorkoutPageProps) {
  const { id } = await params;
  const { data: workout, error: workoutError } = await getWorkout(id);
  const { data: exercises, error: exercisesError } = await getAllExercises();

  if (workoutError || exercisesError) {
    throw workoutError;
  }

  if (!workout || workoutError) {
    notFound();
  }

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { title: "Available Workouts", href: routes.WORKOUTS },
          { title: workout.id, href: `/workouts/${workout.id}` },
          { title: "Edit" },
        ]}
        title="Edit workout"
      />
      <div className="space-y-6">
        <WorkoutEditForm allExercises={exercises} workout={workout} />
      </div>
    </>
  );
}
