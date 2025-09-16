import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-28 px-[28rem] pb-10 pt-[6rem] min-h-screen",
        className
      )}
      {...props}
    />
  );
}
