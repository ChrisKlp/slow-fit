import { SidebarTrigger } from "./ui/sidebar";
import { UserMenu } from "./user-menu";

export function AppBar() {
  return (
    <header className="sticky top-0 flex h-14 items-center justify-between gap-2 border-b bg-background px-2 pr-4 md:px-4 md:pr-6">
      <SidebarTrigger className="size-9 [&>svg]:size-5!" size="lg" />
      <UserMenu />
    </header>
  );
}
