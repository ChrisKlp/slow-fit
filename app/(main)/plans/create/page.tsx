import { PageHeader } from "@/components/common/page-header";
import { WorkoutEditForm } from "@/components/workout/form/workout-edit-form";
import { routes } from "@/lib/navigation-items";

export default function CreateNewPlanPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { title: "Available Workout Plans", href: routes.PLANS },
          { title: "Create" },
        ]}
        title="Create new plan"
      />
      <div className="space-y-6">
        <WorkoutEditForm />
      </div>
    </>
  );
}
