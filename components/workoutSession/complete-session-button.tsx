"use client";

import { Flag } from "lucide-react";
import { logger } from "@/lib/logger";
import { Button } from "../ui/button";

export function CompleteSessionButton({ sessionId }: { sessionId: string }) {
  return (
    <Button
      onClick={() => {
        logger.info(`Complete Session ${sessionId}`);
      }}
      variant="success"
    >
      <Flag className="h-4 w-4" />
      Complete Session
    </Button>
  );
}
