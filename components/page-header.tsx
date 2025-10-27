type PageHeaderProps = {
  title: string;
  subTitle?: string;
  badge?: string;
  children: React.ReactNode;
};

export function PageHeader({ title, subTitle, children }: PageHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="font-semibold text-3xl">{title}</h1>
        </div>
        <span className="text-muted-foreground">{subTitle}</span>
      </div>
      {children}
    </div>
  );
}
