"use client";

import { DefaultOptionsMenu } from "@/components/common/options-menu";
import { logger } from "@/lib/logger";
import { routes } from "@/lib/navigation-items";

export function SingleWorkoutOptionsMenu({ workout }: { workout: string }) {
  return (
    <DefaultOptionsMenu
      editHref={`${routes.WORKOUTS}/${workout}/edit`}
      editLabel="Edit workout"
      onDelete={() => {
        logger.info(`Delete workout ${workout}`);
      }}
    />
  );
}
