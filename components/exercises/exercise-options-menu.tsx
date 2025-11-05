"use client";

import { Activity, Trash2 } from "lucide-react";
import { useState } from "react";
import { logger } from "@/lib/logger";
import { exercises } from "@/lib/mockData/exercises";
import { DeleteConfirmationAlert } from "../common/delete-confirmation-alert";
import { OptionsMenu } from "../common/options-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { ExerciseFormDialog } from "./exercise-form-dialog";

type ExerciseOptionsMenuProps = {
  exerciseId: string;
};

export function ExerciseOptionsMenu({ exerciseId }: ExerciseOptionsMenuProps) {
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
        exercise={exercises.find((exercise) => exercise.id === exerciseId)}
        onOpenChange={setIsEditDialogOpen}
        open={isEditDialogOpen}
      />
      <DeleteConfirmationAlert
        isOpen={isDeleteDialogOpen}
        onAction={() => {
          logger.log(`Deleted exercise ${exerciseId}`);
        }}
        setIsOpen={setIsDeleteDialogOpen}
      />
    </>
  );
}
