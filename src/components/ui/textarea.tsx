import { cn } from "@/lib/utils";
import { TextArea as RadixTextArea } from "@radix-ui/themes";

interface TextAreaProps extends React.ComponentProps<typeof RadixTextArea> {
  className?: string;
}

export function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <RadixTextArea
      className={cn("", className)}
      resize="none"
      size={{ initial: "2", sm: "3" }}
      color="gray"
      {...props}
    />
  );
}
