import { notFound } from "next/navigation";
import { PageHeader } from "@/components/common/page-header";
import { WorkoutEditForm } from "@/components/workout/form/workout-edit-form";
import { exercises } from "@/lib/mockData/exercises";
import { workouts } from "@/lib/mockData/workouts";
import { routes } from "@/lib/navigation-items";

type EditWorkoutPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditWorkoutPage({
  params,
}: EditWorkoutPageProps) {
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
          { title: workout.id, href: `/workouts/${workout.id}` },
          { title: "Edit" },
        ]}
        title="Edit workout"
      />
      <div className="space-y-6">
        {workout && workoutExercises && workoutExercises.length > 0 && (
          <WorkoutEditForm exercises={workoutExercises} workout={workout} />
        )}
      </div>
    </>
  );
}
