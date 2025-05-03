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
  RegisterSchema,
  zRegisterSchema,
} from "../../../schema/register-schema";
import { emailRegister } from "../../../server/actions/email-register";

import { toast } from "sonner";

export default function RegisterForm() {
  const form = useForm<zRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { execute, status } = useAction(emailRegister, {
    onSuccess(data) {
      if (data.data?.error) return toast.error(data.data.error);
      if (data.data?.success) return toast.success(data.data.success);
    },
  });

  const onSubmit = (values: zRegisterSchema) => {
    execute(values);
  };

  return (
    <AuthCard
      cardTitle="Create Account"
      backButtonHref="/auth/login"
      backbuttonLabel="Already have account ? Login heret"
    >
      <div className="w-full flex gap-5 flex-col">
        <Form {...form}>
          <form
            className="text-white flex flex-col gap-3"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* name ---------------------------------------- */}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Input your ID name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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

            <Button
              type="submit"
              variant={"white"}
              className={cn(
                "w-full",
                status === "executing" ? "animate-pulse" : ""
              )}
            >
              Register
            </Button>
          </form>
        </Form>
      </div>
    </AuthCard>
  );
}
