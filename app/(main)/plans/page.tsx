import { Plus } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { PlanCard } from "@/components/plans/plan-card";
import { Button } from "@/components/ui/button";
import { workoutPlans } from "@/lib/mockData/workout-plans";

export default function PlansPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ title: "Available Workout Plans" }]}
        title="Available Workout Plans"
      >
        <Button variant="outline">
          <Plus />
          Add Plan
        </Button>
      </PageHeader>
      <div className="space-y-6">
        {workoutPlans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </>
  );
}
