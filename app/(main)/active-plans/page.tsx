import { Plus } from "lucide-react";
import { ActivePlanCard } from "@/components/activePlan/active-plan-card";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { activePlans } from "@/lib/mockData/active-plans";

export default function ActivePlansPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ title: "Active Plans" }]}
        title="Active Plans"
      >
        <Button variant="outline">
          <Plus />
          Add Plan
        </Button>
      </PageHeader>
      <div className="space-y-6">
        {activePlans.map((plan) => (
          <ActivePlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </>
  );
}
