import LoginFormBackgroundImage from "@/components/auth/login-form-background-image";
import ResetForm from "@/components/auth/reset-form";
import AuthContainer from "@/components/reusable/auth-container";

export default function Reset() {
  return (
    <AuthContainer>
      <LoginFormBackgroundImage />
      <ResetForm />
    </AuthContainer>
  );
}
