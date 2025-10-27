import Link from "next/link";
import { cn } from "@/lib/utils";

type CardHeaderProps = {
  title: string;
  link?: string;
  className?: string;
  variant?: "default" | "primary" | "secondary";
};

export function CardHeader({ title, link, className }: CardHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b p-6 font-semibold",
        className
      )}
    >
      <p>{title}</p>
      {link && (
        <Link className="text-link text-sm" href={link}>
          View
        </Link>
      )}
    </div>
  );
}
