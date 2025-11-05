import { PageHeader } from "@/components/common/page-header";
import { ExerciseList } from "@/components/exercise-list";
import { AddExerciseButton } from "@/components/exercises/add-exercise-button";
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
