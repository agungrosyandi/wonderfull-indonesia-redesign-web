import EmailVerificationForm from "@/components/auth/email-verification-form";
import LoginFormBackgroundImage from "@/components/auth/login-form-background-image";
import AuthContainer from "@/components/reusable/auth-container";

export default function EmailVerification() {
  return (
    <AuthContainer>
      <LoginFormBackgroundImage />
      <EmailVerificationForm />;
    </AuthContainer>
  );
}
