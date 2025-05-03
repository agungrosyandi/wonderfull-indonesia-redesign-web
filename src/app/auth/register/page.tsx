import RegisterForm from "@/components/auth/register-form";
import LoginFormBackgroundImage from "@/components/auth/login-form-background-image";
import AuthContainer from "@/components/reusable/auth-container";

export default function Register() {
  return (
    <AuthContainer>
      <LoginFormBackgroundImage />
      <RegisterForm />
    </AuthContainer>
  );
}
