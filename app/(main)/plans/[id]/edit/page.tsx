import { notFound } from "next/navigation";
import { PageHeader } from "@/components/common/page-header";
import { PlanEditForm } from "@/components/plans/form/plan-edit-form";
import { workoutPlans } from "@/lib/mockData/workout-plans";
import { routes } from "@/lib/navigation-items";

type EditPlanPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPlanPage({ params }: EditPlanPageProps) {
  const { id } = await params;
  const plan = workoutPlans.find((p) => p.id === id);

  if (!plan) {
    notFound();
  }

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { title: "Available Workout Plans", href: routes.PLANS },
          { title: plan.id, href: `/plans/${plan.id}` },
          { title: "Edit" },
        ]}
        title="Edit plan"
      />
      <div className="space-y-6">
        <PlanEditForm plan={plan} />
      </div>
    </>
  );
}
