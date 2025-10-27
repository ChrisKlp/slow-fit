import { Plus } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { activePlans } from "@/lib/mockData/active-plans";
import { ActivePlanCard } from "./active-plan-card";

export default function ActivePlansPage() {
  return (
    <>
      <PageHeader subTitle="Manage your active plans" title="Active Plans">
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
