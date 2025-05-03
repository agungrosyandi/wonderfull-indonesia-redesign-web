import { auth } from "../../../server/auth";
import Navbar from "./header-components/navbar";

export default async function Header() {
  const sessions = await auth();

  return <Navbar expires={sessions?.expires as string} user={sessions?.user} />;
}
