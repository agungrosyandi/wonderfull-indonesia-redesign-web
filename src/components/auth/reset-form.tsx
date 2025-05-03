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

import { ResetSchema, zResetSchema } from "../../../schema/reset-schema";
import { reset } from "../../../server/actions/password-reset";

import { toast } from "sonner";

export default function ResetForm() {
  const form = useForm<zResetSchema>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const { execute, status } = useAction(reset, {
    onSuccess(data) {
      if (data.data?.error) return toast.error(data.data.error);
      if (data.data?.success) return toast.success(data.data.success);
    },
  });

  const onSubmit = (values: zResetSchema) => {
    execute(values);
  };

  return (
    <AuthCard
      cardTitle="Forget your password ?"
      backButtonHref="/auth/login"
      backbuttonLabel="Back to Login"
    >
      <div className="w-full flex gap-5 flex-col">
        {/* email ---------------------------------------- */}

        <Form {...form}>
          <form
            className="text-white flex flex-col gap-3"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* password ---------------------------------------- */}

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
                      disabled={status === "executing"}
                      placeholder="Input your valid email"
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
              Reset Password
            </Button>
          </form>
        </Form>
      </div>
    </AuthCard>
  );
}
