"use client";

import { logger } from "@/lib/logger";
import { routes } from "@/lib/navigation-items";
import { DefaultOptionsMenu } from "../common/options-menu";

type ExerciseOptionsMenuProps = {
  exerciseId: string;
};

export function ExerciseOptionsMenu({ exerciseId }: ExerciseOptionsMenuProps) {
  return (
    <DefaultOptionsMenu
      editHref={`${routes.EXERCISES}/${exerciseId}/edit`}
      editLabel="Edit exercise"
      onDelete={() => {
        logger.info(`Delete exercise ${exerciseId}`);
      }}
      variant="ghost"
    />
  );
}
