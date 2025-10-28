"use client";

import { Flag } from "lucide-react";
import { Button } from "../ui/button";

export function CompleteSessionButton({ sessionId }: { sessionId: string }) {
  return (
    <Button
      onClick={() => {
        console.log("Complete session", sessionId);
      }}
      variant="success"
    >
      <Flag className="h-4 w-4" />
      Complete Session
    </Button>
  );
}
