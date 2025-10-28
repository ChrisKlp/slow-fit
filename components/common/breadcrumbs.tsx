import Link from "next/link";
import { routes } from "@/lib/navigation-items";
import type { BreadcrumbPathItem } from "@/types";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

type BreadcrumbsProps = {
  list?: BreadcrumbPathItem[];
};

export function Breadcrumbs({ list = [] }: BreadcrumbsProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={routes.ROOT}>Home</Link>
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
        {list.map(({ title, href }) => (
          <BreadcrumbItem key={`${title}-${href}`}>
            {href ? (
              <>
                <BreadcrumbLink asChild>
                  <Link href={href}>{title}</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage>{title}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
