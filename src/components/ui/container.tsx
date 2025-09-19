import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <main
      className={cn(
        "relative min-[320px]:px-12 min-[320px]:pb-4 min-[320px]:pt-16 px-40 pb-6 pt-20  sm:px-40 sm:pb-6 sm:pt-24 md:px-48 md:pb-6 md:pt-32 lg:px-60 lg:pb-8 lg:pt-32 xl:px-[28rem] xl:pb-10 xl:pt-[8rem] min-h-screen",
        className
      )}
      {...props}
    />
  );
}
