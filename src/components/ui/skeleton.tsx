import { cn } from "@/utils/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#9f9f9f]/50", className)}
      {...props}
    />
  );
}

export { Skeleton };
