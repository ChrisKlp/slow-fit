"use client";

import { logger } from "@/lib/logger";
import { routes } from "@/lib/navigation-items";
import { DefaultOptionsMenu } from "../common/options-menu";

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
