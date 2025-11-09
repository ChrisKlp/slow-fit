import { PageHeader } from "@/components/common/page-header";
import { AddExerciseButton } from "@/components/exercises/add-exercise-button";
import { ExerciseList } from "@/components/exercises/exercise-list";
import { exercises } from "@/lib/mockData/exercises";

export default function ExercisesPage() {
  const pageTitle = "Available Exercises";

  return (
    <>
      <PageHeader breadcrumbs={[{ title: pageTitle }]} title={pageTitle}>
        <div>
          <AddExerciseButton />
        </div>
      </PageHeader>
      <ExerciseList exercises={exercises} numbered title="Exercise list" />
    </>
  );
}
