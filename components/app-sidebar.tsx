"use client";

import Link from "next/link";
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
import { navigationItems } from "@/lib/navigation-items";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

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
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="lg" tooltip={item.title}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
