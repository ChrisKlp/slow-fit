import { EllipsisVertical } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";

type MoreMenuProps = {
  children: React.ReactNode;
};

export function MoreMenu({ children }: MoreMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      {children}
    </DropdownMenu>
  );
}
