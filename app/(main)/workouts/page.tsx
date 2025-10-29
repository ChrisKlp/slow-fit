import { Plus } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { WorkoutList } from "@/components/workout-list";
import { workouts } from "@/lib/mockData/workouts";

export default function WorkoutsPage() {
  const pageTitle = "Available Workouts";

  return (
    <>
      <PageHeader breadcrumbs={[{ title: pageTitle }]} title={pageTitle}>
        <Button variant="outline">
          <Plus />
          Add Workout
        </Button>
      </PageHeader>
      <WorkoutList title="Workout list" workouts={workouts} />
    </>
  );
}
