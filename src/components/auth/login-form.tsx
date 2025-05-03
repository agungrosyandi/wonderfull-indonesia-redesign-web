"use client";

import AuthCard from "./auth-card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { LoginSchema, zLoginSchema } from "../../../schema/login-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { emailSignIn } from "../../../server/actions/email-signin";
import { cn } from "@/utils/utils";
import { useState } from "react";

import { toast } from "sonner";

export default function LoginForm() {
  const form = useForm<zLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      code: "",
    },
  });

  const [showTwoFactor, setShowTwoFactor] = useState(false);

  const { execute, status } = useAction(emailSignIn, {
    onSuccess(data) {
      if (data.data?.error) {
        setShowTwoFactor(false);
        return toast.error(data.data.error);
      }

      if (data.data?.success) return toast.success(data.data.success);
      if (data.data?.twoFactor) return setShowTwoFactor(true);
    },
  });

  const onSubmit = (values: zLoginSchema) => {
    execute(values);
  };

  return (
    <AuthCard
      cardTitle="Login Page"
      backButtonHref="/auth/register"
      backbuttonLabel="Dont have account ? create new Account"
      showSocials
    >
      <div className="w-full flex gap-5 flex-col">
        <Form {...form}>
          <form
            className="text-white flex flex-col gap-3"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* OTP Input -------------------------------------------- */}

            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      we sent you a two factor code to your email
                    </FormLabel>
                    <FormControl>
                      <InputOTP
                        disabled={status === "executing"}
                        {...field}
                        maxLength={6}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {!showTwoFactor && (
              <>
                {/* email ---------------------------------------- */}

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          autoComplete="email"
                          placeholder="Input your valid email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* password ---------------------------------------- */}

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          autoComplete="current-password"
                          placeholder="Input password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <>
              {/* forget password ---------------------------------------- */}

              <p className="my-5 text-start text-xs">
                <Link href={"/auth/reset"}> Forget your password ?</Link>
              </p>
            </>

            <Button
              type="submit"
              variant={"white"}
              className={cn(
                "w-full",
                status === "executing" ? "animate-pulse" : ""
              )}
            >
              {showTwoFactor ? "Verify" : "Login"}
            </Button>
          </form>
        </Form>
      </div>
    </AuthCard>
  );
}
