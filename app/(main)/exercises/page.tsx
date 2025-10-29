import { Plus } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { ExerciseList } from "@/components/exercise-list";
import { Button } from "@/components/ui/button";
import { exercises } from "@/lib/mockData/exercises";

export default function ExercisesPage() {
  const pageTitle = "Available Exercises";

  return (
    <>
      <PageHeader breadcrumbs={[{ title: pageTitle }]} title={pageTitle}>
        <Button variant="outline">
          <Plus />
          Add Exercise
        </Button>
      </PageHeader>
      <ExerciseList exercises={exercises} numbered title="Exercise list" />
    </>
  );
}
