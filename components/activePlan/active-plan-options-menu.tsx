"use client";

import { logger } from "@/lib/logger";
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
        logger.info(`Delete plan ${planId}`);
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
        logger.info(`Delete single plan ${planId}`);
      }}
    />
  );
}
