"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExerciseFormDialog } from "./form/exercise-form-dialog";

export function AddExerciseButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        variant="outline"
      >
        <Plus />
        Add Exercise
      </Button>
      <ExerciseFormDialog onOpenChange={setOpen} open={open} />
    </>
  );
}
