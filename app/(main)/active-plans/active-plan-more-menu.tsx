"use client";

import { Activity, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { MoreMenu } from "@/components/common/more-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { routes } from "@/lib/navigation-items";

type ActivePlanMoreMenuProps = {
  planId: string;
};

export function ActivePlanMoreMenu({ planId }: ActivePlanMoreMenuProps) {
  return (
    <MoreMenu>
      <DropdownMenuContent align="end" className="w-40" forceMount>
        <DropdownMenuItem asChild>
          <Link href={`${routes.ACTIVE_PLANS}/${planId}`}>
            <Activity className="mr-2 h-4 w-4" />
            <span>View</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`${routes.ACTIVE_PLANS}/${planId}/edit`}>
            <Pencil className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            console.log("Delete plan", planId);
          }}
          variant="destructive"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </MoreMenu>
  );
}
