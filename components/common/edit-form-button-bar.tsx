"use client";

import { Button } from "../ui/button";

type EditFormButtonBarProps = {
  formId: string;
  isPending?: boolean;
  onCancel: () => void;
  onDelete?: () => void;
};

export function EditFormButtonBar({
  formId,
  isPending,
  onCancel,
  onDelete,
}: EditFormButtonBarProps) {
  return (
    <div className="flex justify-end gap-3">
      <Button
        disabled={isPending}
        onClick={onCancel}
        type="button"
        variant="outline"
      >
        Cancel
      </Button>
      {onDelete && (
        <Button
          disabled={isPending}
          onClick={onDelete}
          type="button"
          variant="destructive"
        >
          Delete
        </Button>
      )}
      <Button disabled={isPending} form={formId} type="submit">
        <span className="flex gap-1">
          {isPending ? (
            "Saving..."
          ) : (
            <>
              Save<span className="hidden md:inline-flex">changes</span>
            </>
          )}
        </span>
      </Button>
    </div>
  );
}
