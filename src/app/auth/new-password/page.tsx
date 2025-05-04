import Loading from "@/app/(content)/list-destination/[places]/loading";
import LoginFormBackgroundImage from "@/components/auth/login-form-background-image";
import NewPasswordForm from "@/components/auth/new-password-form";
import AuthContainer from "@/components/reusable/auth-container";
import { Suspense } from "react";

export default function NewPass() {
  return (
    <AuthContainer>
      <Suspense fallback={<Loading />}>
        <LoginFormBackgroundImage />
        <NewPasswordForm />;
      </Suspense>
    </AuthContainer>
  );
}
