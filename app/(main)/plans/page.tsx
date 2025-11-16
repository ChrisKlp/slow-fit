import { Plus } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { PlanCard } from "@/features/plans/components/plan-card";
import { workoutPlans } from "@/lib/mockData/workout-plans";
import { routes } from "@/lib/navigation-items";

export default function PlansPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ title: "Available Workout Plans" }]}
        title="Available Workout Plans"
      >
        <Button asChild variant="outline">
          <Link href={`${routes.PLANS_CREATE}`}>
            <Plus />
            Add Plan
          </Link>
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
