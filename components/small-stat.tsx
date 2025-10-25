import type { LucideIcon } from "lucide-react";

type SmallStatProps = {
  title: string;
  content: string;
  Icon: LucideIcon;
};

export function SmallStat({ title, content, Icon }: SmallStatProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border bg-card p-4">
      <div className="grid size-14 place-items-center rounded-full bg-accent">
        <Icon className="text-blue-400" />
      </div>
      <div>
        <p className="text-muted-foreground text-xs">{title}</p>
        <span className="text-3xl">{content}</span>
      </div>
    </div>
  );
}
