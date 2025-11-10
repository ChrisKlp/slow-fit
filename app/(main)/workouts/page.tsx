import { Plus } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { WorkoutList } from "@/components/workout-list";
import { workouts } from "@/lib/mockData/workouts";
import { routes } from "@/lib/navigation-items";

export default function WorkoutsPage() {
  const pageTitle = "Available Workouts";

  return (
    <>
      <PageHeader breadcrumbs={[{ title: pageTitle }]} title={pageTitle}>
        <Button asChild variant="outline">
          <Link href={`${routes.WORKOUTS}/new`}>
            <Plus />
            Add Workout
          </Link>
        </Button>
      </PageHeader>
      <WorkoutList title="Workout list" workouts={workouts} />
    </>
  );
}
