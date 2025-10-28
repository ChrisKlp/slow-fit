"use client";

import { routes } from "@/lib/navigation-items";
import { DefaultOptionsMenu } from "../common/options-menu";

type ActivePlanOptionsMenuProps = {
  planId: string;
};

export function ActivePlanOptionsMenu({ planId }: ActivePlanOptionsMenuProps) {
  return (
    <DefaultOptionsMenu
      editHref={`${routes.ACTIVE_PLANS}/${planId}/edit`}
      editLabel="Edit plan"
      onDelete={() => {
        console.log("Delete plan", planId);
      }}
      variant="ghost"
      viewHref={`${routes.ACTIVE_PLANS}/${planId}`}
      viewLabel="View plan"
    />
  );
}

export function SingleActivePlanOptionsMenu({
  planId,
}: ActivePlanOptionsMenuProps) {
  return (
    <DefaultOptionsMenu
      editHref={`${routes.ACTIVE_PLANS}/${planId}/edit`}
      editLabel="Edit plan"
      onDelete={() => {
        console.log("Delete plan", planId);
      }}
    />
  );
}
