import { AppBar } from "@/components/app-bar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <AppBar />
        <main className="container mx-auto p-4 md:p-6 md:py-10">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
