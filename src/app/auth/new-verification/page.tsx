import Loading from "@/app/(content)/list-destination/[places]/loading";
import EmailVerificationForm from "@/components/auth/email-verification-form";
import LoginFormBackgroundImage from "@/components/auth/login-form-background-image";
import AuthContainer from "@/components/reusable/auth-container";
import { Suspense } from "react";

export default function EmailVerification() {
  return (
    <AuthContainer>
      <Suspense fallback={<Loading />}>
        <LoginFormBackgroundImage />
        <EmailVerificationForm />;
      </Suspense>
    </AuthContainer>
  );
}
