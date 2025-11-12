"use client";

import { Button } from "../ui/button";

type EditFormButtonBarProps = {
  formId: string;
  onCancel: () => void;
  onDelete: () => void;
};

export function EditFormButtonBar({
  formId,
  onCancel,
  onDelete,
}: EditFormButtonBarProps) {
  return (
    <div className="flex justify-end gap-3">
      <Button onClick={onCancel} type="button" variant="outline">
        Cancel
      </Button>
      <Button onClick={onDelete} type="button" variant="destructive">
        Delete
      </Button>
      <Button form={formId} type="submit">
        <span className="flex gap-1">
          Save<span className="hidden md:inline-flex">changes</span>
        </span>
      </Button>
    </div>
  );
}
