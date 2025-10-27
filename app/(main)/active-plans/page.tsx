import { Calendar } from "lucide-react";
import { InfoItem } from "@/components/common/info-item";
import { Progress } from "@/components/ui/progress";

export default function ActivePlansPage() {
  return (
    <>
      <h1 className="mb-8 font-semibold text-3xl">Active Plans</h1>
      <div className="card p-6">
        <h2 className="mb-6 font-semibold text-xl">StrongLifts</h2>
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <InfoItem icon={Calendar} label="Start" value="2025-03-01" />
          <InfoItem icon={Calendar} label="Finish" value="2025-03-01" />
          <InfoItem icon={Calendar} label="Total" value="40" />
          <InfoItem
            icon={Calendar}
            label="Completed"
            value="29"
            variant="secondary"
          />
          <InfoItem
            icon={Calendar}
            label="Remaining"
            value="11"
            variant="primary"
          />
          <InfoItem
            icon={Calendar}
            label="Progress"
            value="60%"
            variant="secondary"
          />
        </div>
        <Progress className="h-2" value={60} />
      </div>
    </>
  );
}
