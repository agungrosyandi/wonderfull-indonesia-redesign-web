import { redirect } from "next/navigation";
import { auth } from "../../../../server/auth";
import { ContentForm } from "./content-form";

export default async function CreateContent() {
  const session = await auth();

  if (
    session?.user.role !== "admin" &&
    session?.user.role !== "user-contributor"
  )
    return redirect("/dashboard/settings");

  // import from content-form.tsx -------------------------

  return <ContentForm />;
}
