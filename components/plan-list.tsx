import { Calendar } from "lucide-react";
import Link from "next/link";
import type { Plan } from "@/lib/mockData/plans";
import { CardHeader } from "./common/card-header";
import { Badge } from "./ui/badge";

type PlanListProps = {
  title: string;
  link?: string;
  plans: Plan[];
};

export function PlanList({ title, link, plans }: PlanListProps) {
  return (
    <div className="card overflow-hidden p-0">
      <CardHeader link={link} title={title} />
      <div className="grid items-center">
        {plans.map((plan, index) => (
          <Link
            className="border-b p-6 py-4 transition-colors last:border-b-0 hover:bg-muted/70"
            href={`/plan/${plan.title}`}
            key={`${plan.title}-${index}`}
          >
            <div className="mb-2 flex items-center gap-2">
              <p className="font-semibold">{plan.title}</p>
              <Badge variant="outline">{plan.progress}%</Badge>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-2">
                <Calendar className="size-4 text-blue-500" /> {plan.startDate}
              </span>
              -
              <span className="flex items-center gap-2">
                <Calendar className="size-4 text-blue-500" /> {plan.endDate}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
