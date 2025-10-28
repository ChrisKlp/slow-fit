import { Activity, Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import { EditDeleteGroupButton } from "@/components/common/edit-delete-group-button";
import { InfoItem } from "@/components/common/info-item";
import { StatusInfoItem } from "@/components/common/status-info-item";
import { PageHeader } from "@/components/page-header";
import { allWorkoutSessions } from "@/lib/mockData/workout-sessions";
import { routes } from "@/lib/navigation-items";

type SingleWorkoutSessionPageProps = {
  params: Promise<{ id: string }>;
};

export default async function SingleWorkoutSessionPage({
  params,
}: SingleWorkoutSessionPageProps) {
  const { id } = await params;
  const workoutSession = allWorkoutSessions.find((p) => p.id === id);

  if (!workoutSession) {
    notFound();
  }

  return (
    <>
      <PageHeader subTitle="Workout Session" title={workoutSession.name}>
        <EditDeleteGroupButton
          editHref={`${routes.WORKOUT_SESSIONS}/${workoutSession.id}/edit`}
          editLabel="Edit session"
          id={workoutSession.id}
        />
      </PageHeader>
      <div className="space-y-6">
        <div className="card grid grid-cols-2 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoItem
            icon={Activity}
            label="Plan"
            link={`${routes.ACTIVE_PLANS}/${workoutSession.activePlanId}`}
            value={workoutSession.planName}
          />
          <InfoItem icon={Calendar} label="Date" value={workoutSession.date} />
          <StatusInfoItem status={workoutSession.status} />
        </div>
      </div>
    </>
  );
}
