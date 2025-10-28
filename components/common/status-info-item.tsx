import { Calendar, Check, XCircle } from "lucide-react";
import type { WorkoutSessionStatus } from "@/lib/mockData/workout-sessions";
import { InfoItem } from "./info-item";

type StatusInfoItemProps = {
  status: WorkoutSessionStatus;
};

const statusIconMap = {
  completed: Check,
  missed: XCircle,
  scheduled: Calendar,
} as const;

const variantMap = {
  completed: "secondary",
  missed: "destructive",
  scheduled: "primary",
} as const;

export function StatusInfoItem({ status }: StatusInfoItemProps) {
  const Icon = statusIconMap[status] || Calendar;
  const variant = variantMap[status] || "secondary";

  return (
    <InfoItem icon={Icon} label="Status" value={status} variant={variant} />
  );
}
