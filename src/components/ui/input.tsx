import { cn } from "@/lib/utils";
import { TextField } from "@radix-ui/themes";

interface InputProps extends React.ComponentProps<typeof TextField.Root> {
  className?: string;
  icon?: React.ReactNode;
}

export function Input({ className, icon, ...props }: InputProps) {
  return (
    <TextField.Root
      className={cn("", className)}
      size={{ initial: "3" }}
      color="gray"
      {...props}
    >
      {icon && <TextField.Slot>{icon}</TextField.Slot>}
    </TextField.Root>
  );
}
