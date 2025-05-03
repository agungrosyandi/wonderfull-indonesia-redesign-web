import LoginFormBackgroundImage from "@/components/auth/login-form-background-image";
import NewPasswordForm from "@/components/auth/new-password-form";
import AuthContainer from "@/components/reusable/auth-container";

export default function NewPass() {
  return (
    <AuthContainer>
      <LoginFormBackgroundImage />
      <NewPasswordForm />;
    </AuthContainer>
  );
}
