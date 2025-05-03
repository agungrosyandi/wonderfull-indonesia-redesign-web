"use client";

import { useContextAPI } from "@/hooks/useContextAPI";
import { useRouter, useSearchParams } from "next/navigation";
import { newVerification } from "../../../server/actions/tokens";
import { useCallback, useEffect } from "react";
import AuthCard from "./auth-card";
import FormSuccess from "./form-success";
import FormError from "./form-error";

export default function EmailVerificationForm() {
  const token = useSearchParams().get("token");
  const router = useRouter();

  const { error, success, setError, setSuccess } = useContextAPI();

  const handleVerification = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("No Token Found");
      return;
    }

    newVerification(token).then((data) => {
      if (data.error) setError(data.error);
      if (data.success) {
        setSuccess(data.success);
        router.push("/auth/login");
      }
    });
  }, []);

  useEffect(() => {
    handleVerification();
  }, []);

  return (
    <AuthCard
      cardTitle="Verify your account"
      backButtonHref="/auth/login"
      backbuttonLabel="Back to login"
    >
      <div className="flex flex-col items-center w-full justify-center">
        <p>{!success && !error ? "Verify Email ...." : null}</p>
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </AuthCard>
  );
}
