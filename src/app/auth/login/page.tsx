import LoginForm from "@/components/auth/login-form";
import LoginFormBackgroundImage from "@/components/auth/login-form-background-image";
import LoginSessions from "@/components/login-sessions/login-sessions";
import { auth } from "../../../../server/auth";
import AuthContainer from "@/components/reusable/auth-container";

export default async function Login() {
  const session = await auth();

  const user = session?.user;

  return !user ? (
    // login form  ----------------

    <AuthContainer>
      <LoginFormBackgroundImage />
      <LoginForm />
    </AuthContainer>
  ) : (
    // user already in login session  ----------------

    <LoginSessions expires={session.expires} user={session.user} />
  );
}
