"use client";

import { Activity, Trash2 } from "lucide-react";
import { useState } from "react";
import { DeleteConfirmationAlert } from "@/components/common/delete-confirmation-alert";
import { OptionsMenu } from "@/components/common/options-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { logger } from "@/lib/logger";
import type { Exercise } from "../types";
import { ExerciseFormDialog } from "./form/exercise-form-dialog";

type ExerciseOptionsMenuProps = {
  exercise: Exercise;
};

export function ExerciseOptionsMenu({ exercise }: ExerciseOptionsMenuProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

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
        onAction={() => {
          logger.log(`Deleted exercise ${exercise.id}`);
        }}
        setIsOpen={setIsDeleteDialogOpen}
      />
    </>
  );
}
