"use client";

import { logger } from "@/lib/logger";
import { routes } from "@/lib/navigation-items";
import { DefaultOptionsMenu } from "../common/options-menu";

export function SingleSessionOptionsMenu({ sessionId }: { sessionId: string }) {
  return (
    <DefaultOptionsMenu
      editHref={`${routes.WORKOUT_SESSIONS}/${sessionId}/edit`}
      editLabel="Edit session"
      onDelete={() => {
        logger.info(`Delete Session ${sessionId}`);
      }}
    />
  );
}
