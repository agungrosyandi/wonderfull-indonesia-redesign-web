import { AlertCircle } from "lucide-react";

export default function FormError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <div className="bg-destructive flex items-center gap-2 text-xs text-secondary-foreground p-3 rounded-md">
      <AlertCircle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
}
