import Link from "next/link";
import { Fragment } from "react/jsx-runtime";
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
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {list.map(({ title, href }) => {
          if (href) {
            return (
              <Fragment key={`${title}-${href}`}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={href}>{title}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            );
          }
          return (
            <BreadcrumbItem key={title}>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
