import { PageHeader } from "@/components/common/page-header";
import { getAllExercises } from "@/features/exercises/actions/exercise-actions";
import { AddExerciseButton } from "@/features/exercises/components/add-exercise-button";
import { ExerciseList } from "@/features/exercises/components/exercise-list";

export default async function ExercisesPage() {
  const { data, error } = await getAllExercises();

  if (error) {
    throw error;
  }

  const pageTitle = "Available Exercises";

  return (
    <>
      <PageHeader breadcrumbs={[{ title: pageTitle }]} title={pageTitle}>
        <div>
          <AddExerciseButton />
        </div>
      </PageHeader>
      <ExerciseList exercises={data} numbered title="Exercise list" />
    </>
  );
}
