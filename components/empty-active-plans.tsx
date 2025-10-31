import { ArrowUpRightIcon, BicepsFlexed } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { routes } from "@/lib/navigation-items";

export function EmptyActivePlans() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BicepsFlexed />
        </EmptyMedia>
        <EmptyTitle>No Active Plans</EmptyTitle>
        <EmptyDescription>
          You don't have any active workout plans yet. Choose a ready-made plan
          to start training today.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button asChild className="w-60">
            <Link href={`${routes.ACTIVE_PLANS}/start-new-plan`}>
              <span>Get Started</span>
            </Link>
          </Button>
        </div>
      </EmptyContent>
      <Button
        asChild
        className="text-muted-foreground"
        size="sm"
        variant="link"
      >
        <Link href={routes.PLANS}>
          Learn More <ArrowUpRightIcon />
        </Link>
      </Button>
    </Empty>
  );
}
