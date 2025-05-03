import { redirect } from "next/navigation";
import { auth } from "../../../../server/auth";
import SettingsCard from "./01.settings-card";

export default async function Settings() {
  const session = await auth();

  if (!session) redirect("/auth/login");

  return <SettingsCard session={session} />;
}
