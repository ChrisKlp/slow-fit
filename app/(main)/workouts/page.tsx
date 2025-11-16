import { Plus } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { getAllWorkouts } from "@/features/workouts/actions/workout-actions";
import { WorkoutList } from "@/features/workouts/components/workout-list";
import { routes } from "@/lib/navigation-items";

export default async function WorkoutsPage() {
  const { data, error } = await getAllWorkouts();

  if (error) {
    throw error;
  }

  const pageTitle = "Available Workouts";

  return (
    <>
      <PageHeader breadcrumbs={[{ title: pageTitle }]} title={pageTitle}>
        <Button asChild variant="outline">
          <Link href={`${routes.WORKOUTS_CREATE}`}>
            <Plus />
            Add Workout
          </Link>
        </Button>
      </PageHeader>
      <WorkoutList title="Workout list" workouts={data} />
    </>
  );
}
