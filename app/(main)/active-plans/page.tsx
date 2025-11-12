import { Plus } from "lucide-react";
import Link from "next/link";
import { ActivePlanCard } from "@/components/activePlan/active-plan-card";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { activePlans } from "@/lib/mockData/active-plans";
import { routes } from "@/lib/navigation-items";

export default function ActivePlansPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ title: "Active Plans" }]}
        title="Active Plans"
      >
        <Button asChild variant="outline">
          <Link href={routes.ACTIVE_PLANS_CREATE}>
            <Plus />
            Start a New Plan
          </Link>
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
