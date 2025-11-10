import { PageHeader } from "@/components/common/page-header";
import { WorkoutEditForm } from "@/components/workout/form/workout-edit-form";
import { routes } from "@/lib/navigation-items";

export default function CreateNewWorkoutPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { title: "Available Workouts", href: routes.WORKOUTS },
          { title: "New" },
        ]}
        title="Create new workout"
      />
      <div className="space-y-6">
        <WorkoutEditForm />
      </div>
    </>
  );
}
