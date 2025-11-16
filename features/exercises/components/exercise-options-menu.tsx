"use client";

import { Activity, Trash2 } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { DeleteConfirmationAlert } from "@/components/common/delete-confirmation-alert";
import { OptionsMenu } from "@/components/common/options-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { deleteExercise } from "../actions/exercise-actions";
import type { Exercise } from "../types";
import { ExerciseFormDialog } from "./form/exercise-form-dialog";

type ExerciseOptionsMenuProps = {
  exercise: Exercise;
};

export function ExerciseOptionsMenu({ exercise }: ExerciseOptionsMenuProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteExercise(exercise.id);

      if (result.success) {
        toast.success("Exercise deleted!");
        setIsDeleteDialogOpen(false);
      } else {
        toast.error(result.error || "Failed to delete exercise");
      }
    });
  };

  return (
    <>
      <OptionsMenu variant="ghost">
        <DropdownMenuContent align="end" className="w-40" forceMount>
          <DropdownMenuItem
            className="w-full"
            onSelect={() => {
              setIsEditDialogOpen(true);
            }}
          >
            <Activity className="mr-2 h-4 w-4" />
            <span>Edit exercise</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            disabled={isPending}
            onSelect={() => {
              setIsDeleteDialogOpen(true);
            }}
            variant="destructive"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </OptionsMenu>
      <ExerciseFormDialog
        exercise={exercise}
        onOpenChange={setIsEditDialogOpen}
        open={isEditDialogOpen}
      />
      <DeleteConfirmationAlert
        isOpen={isDeleteDialogOpen}
        onAction={handleDelete}
        setIsOpen={setIsDeleteDialogOpen}
      />
    </>
  );
}
