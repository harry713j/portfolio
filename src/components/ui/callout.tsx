import { cn } from "@/lib/utils";
import { Callout as RadixCallout } from "@radix-ui/themes";

interface CalloutProps extends React.ComponentProps<typeof RadixCallout.Root> {
  className?: string;
  icon: React.ReactNode;
  content: string;
}

export function Callout({ className, icon, content, ...props }: CalloutProps) {
  return (
    <RadixCallout.Root
      className={cn("w-1/2", className)}
      variant="soft"
      size={{ initial: "2" }}
      role="alert"
      {...props}
    >
      <RadixCallout.Icon>{icon}</RadixCallout.Icon>
      <RadixCallout.Text>{content}</RadixCallout.Text>
    </RadixCallout.Root>
  );
}
