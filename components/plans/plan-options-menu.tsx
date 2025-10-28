"use client";

import { logger } from "@/lib/logger";
import { routes } from "@/lib/navigation-items";
import { DefaultOptionsMenu } from "../common/options-menu";

type PlanOptionsMenuProps = {
  planId: string;
};

export function PlanOptionsMenu({ planId }: PlanOptionsMenuProps) {
  return (
    <DefaultOptionsMenu
      editHref={`${routes.PLANS}/${planId}/edit`}
      editLabel="Edit plan"
      onDelete={() => {
        logger.info(`Delete plan ${planId}`);
      }}
      variant="ghost"
      viewHref={`${routes.PLANS}/${planId}`}
      viewLabel="View plan"
    />
  );
}

export function SinglePlanOptionsMenu({ planId }: PlanOptionsMenuProps) {
  return (
    <DefaultOptionsMenu
      editHref={`${routes.PLANS}/${planId}/edit`}
      editLabel="Edit plan"
      onDelete={() => {
        logger.info(`Delete single plan ${planId}`);
      }}
    />
  );
}
