import { Dumbbell } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

type ActivityToggleProps = {
  onPressedChange?: (value: boolean) => void;
  pressed?: boolean;
};

export function ActivityToggle({
  onPressedChange,
  pressed,
}: ActivityToggleProps) {
  return (
    <Toggle
      aria-label="Toggle bookmark"
      className="size-7 data-[state=on]:bg-teal-600/40 md:size-10 data-[state=on]:*:[svg]:stroke-teal-400"
      onPressedChange={onPressedChange}
      pressed={pressed}
      size="sm"
      variant="outline"
    >
      <Dumbbell />
    </Toggle>
  );
}
