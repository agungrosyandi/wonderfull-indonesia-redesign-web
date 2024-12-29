import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function ButtonFormPublish() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      Publish
    </Button>
  );
}
