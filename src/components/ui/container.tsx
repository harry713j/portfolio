import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col min-[320px]:px-12 min-[320px]:gap-8 min-[320px]:pb-4 min-[320px]:pt-6 px-40 gap-12 pb-6 pt-8  sm:px-40 sm:gap-16 sm:pb-6 sm:pt-12 md:px-48 md:gap-20 md:pb-6 md:pt-16 lg:px-60 lg:gap-24 lg:pb-8 lg:pt-20 xl:gap-28 xl:px-[28rem] xl:pb-10 xl:pt-[6rem] min-h-screen",
        className
      )}
      {...props}
    />
  );
}
