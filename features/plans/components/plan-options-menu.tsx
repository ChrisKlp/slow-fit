"use client";

import { DefaultOptionsMenu } from "@/components/common/options-menu";
import { logger } from "@/lib/logger";
import { routes } from "@/lib/navigation-items";

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
