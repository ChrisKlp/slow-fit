"use client";

import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

type EditDeleteGroupButtonProps = {
  editLabel: string;
  editHref: string;
  id: string;
};

export function EditDeleteGroupButton({
  editHref,
  editLabel,
  id,
}: EditDeleteGroupButtonProps) {
  return (
    <div className="flex items-center gap-2">
      <Button asChild variant="outline">
        <Link href={editHref}>
          <Pencil /> {editLabel}
        </Link>
      </Button>
      <Button
        aria-label="Delete"
        onClick={() => {
          console.log("Delete", id);
        }}
        size="icon"
        variant="destructive"
      >
        <Trash2 />
      </Button>
    </div>
  );
}
