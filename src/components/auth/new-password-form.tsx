"use client";

import AuthCard from "./auth-card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { cn } from "@/utils/utils";

import {
  NewPasswordSchema,
  zNewPasswordSchema,
} from "../../../schema/new-password-schema";

import { newPassword } from "../../../server/actions/new-password";
import { useRouter, useSearchParams } from "next/navigation";

import { toast } from "sonner";

export default function NewPasswordForm() {
  const form = useForm<zNewPasswordSchema>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const router = useRouter();

  const { execute, status } = useAction(newPassword, {
    onSuccess(data) {
      if (data.data?.error) return toast.error(data.data.error);

      if (data.data?.success) {
        router.push("/auth/login");
        toast.success(data.data.success);

        return;
      }
    },
  });

  const onSubmit = (values: zNewPasswordSchema) => {
    execute({ password: values.password, token });
  };

  return (
    <AuthCard
      cardTitle="Enter New Password"
      backButtonHref="/auth/login"
      backbuttonLabel="Back to Login"
    >
      <div className="w-full flex gap-5 flex-col">
        <Form {...form}>
          <form
            className="text-white flex flex-col gap-3"
            onSubmit={form.handleSubmit(onSubmit)}
          >
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
                      disabled={status === "executing"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant={"white"}
              className={cn(
                "w-full",
                status === "executing" ? "animate-pulse" : ""
              )}
            >
              Confirm Password
            </Button>
          </form>
        </Form>
      </div>
    </AuthCard>
  );
}
