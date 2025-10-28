import type { BreadcrumbPathItem } from "@/types";
import { Breadcrumbs } from "./common/breadcrumbs";

type PageHeaderProps = {
  title: string;
  badge?: string;
  breadcrumbs?: BreadcrumbPathItem[];
  children?: React.ReactNode;
};

export function PageHeader({ title, children, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="mb-8 space-y-6">
      <Breadcrumbs list={breadcrumbs} />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="font-semibold text-3xl">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}
