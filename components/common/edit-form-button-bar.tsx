"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { DeleteConfirmationAlert } from "./delete-confirmation-alert";

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
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  return (
    <>
      {" "}
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
            onClick={() => {
              setIsDeleteDialogOpen(true);
            }}
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
      {onDelete && (
        <DeleteConfirmationAlert
          isOpen={isDeleteDialogOpen}
          onAction={onDelete}
          setIsOpen={setIsDeleteDialogOpen}
        />
      )}
    </>
  );
}
