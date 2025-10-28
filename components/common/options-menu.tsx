import { Activity, EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type OptionsMenuProps = {
  children: React.ReactNode;
  variant?: "outline" | "ghost";
};

export function OptionsMenu({
  children,
  variant = "outline",
}: OptionsMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant={variant}>
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      {children}
    </DropdownMenu>
  );
}

type CrudOptionsMenuProps = {
  editHref?: string;
  editLabel?: string;
  viewHref?: string;
  viewLabel?: string;
  onDelete?: () => void;
  variant?: "outline" | "ghost";
};

export function DefaultOptionsMenu({
  editHref,
  editLabel,
  viewHref,
  viewLabel,
  onDelete,
  variant,
}: CrudOptionsMenuProps) {
  return (
    <OptionsMenu variant={variant}>
      <DropdownMenuContent align="end" className="w-40" forceMount>
        {viewHref && (
          <DropdownMenuItem asChild>
            <Link href={viewHref}>
              <Activity className="mr-2 h-4 w-4" />
              <span>{viewLabel}</span>
            </Link>
          </DropdownMenuItem>
        )}
        {editHref && (
          <DropdownMenuItem asChild>
            <Link href={editHref}>
              <Pencil className="mr-2 h-4 w-4" />
              <span>{editLabel}</span>
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            onDelete?.();
          }}
          variant="destructive"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </OptionsMenu>
  );
}
