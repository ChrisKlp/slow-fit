import { PageHeader } from "@/components/common/page-header";
import { AddExerciseButton } from "@/features/exercises/components/add-exercise-button";
import { ExerciseList } from "@/features/exercises/components/exercise-list";
import { createClient } from "@/lib/supabase/server";

export default async function ExercisesPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("exercises").select("*");

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
