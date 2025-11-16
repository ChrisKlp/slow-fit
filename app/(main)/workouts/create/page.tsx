import { PageHeader } from "@/components/common/page-header";
import { getAllExercises } from "@/features/exercises/actions/exercise-actions";
import { WorkoutEditForm } from "@/features/workouts/components/form/workout-edit-form";
import { routes } from "@/lib/navigation-items";

export default async function CreateNewWorkoutPage() {
  const { data: exercises, error: exercisesError } = await getAllExercises();

  if (exercisesError) {
    throw exercisesError;
  }

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { title: "Available Workouts", href: routes.WORKOUTS },
          { title: "Create" },
        ]}
        title="Create new workout"
      />
      <div className="space-y-6">
        <WorkoutEditForm allExercises={exercises} />
      </div>
    </>
  );
}
