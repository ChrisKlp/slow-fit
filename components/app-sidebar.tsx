"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  mainNavigationItems,
  type NavigationItem,
  routes,
  secondaryNavigationItems,
} from "@/lib/navigation-items";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Separator } from "./ui/separator";

export function AppSidebar() {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader
        className={cn(
          "grid h-20 overflow-hidden pl-8 align-items-center transition-all",
          state === "collapsed" && "pl-4"
        )}
      >
        <Logo variant={state !== "collapsed" ? "default" : "icon"} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupComponent items={mainNavigationItems} />
        <Separator />
        <SidebarGroupComponent items={secondaryNavigationItems} />
      </SidebarContent>
    </Sidebar>
  );
}

function SidebarGroupComponent({ items }: { items: NavigationItem[] }) {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const isActive =
              item.url === routes.ROOT
                ? pathname === routes.ROOT
                : pathname === item.url || pathname.startsWith(`${item.url}/`);

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  size="lg"
                  tooltip={item.title}
                >
                  <Link href={item.url} onClick={() => setOpenMobile(false)}>
                    <item.IconComponent />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
