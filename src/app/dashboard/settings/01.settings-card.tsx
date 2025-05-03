"use client";

import { Session } from "next-auth";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SettingsSchema } from "../../../../schema/settings-schema";
import { z } from "zod";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import FormError from "@/components/auth/form-error";
import FormSuccess from "@/components/auth/form-success";
import { useState } from "react";
import { useAction } from "next-safe-action/hooks";
import { settings } from "../../../../server/actions/settings";
import { UploadButton } from "@/app/api/uploadthing/upload";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { signOut } from "next-auth/react";
import { DeleteAccount } from "../../../../server/actions/delete-account";

import { toast } from "sonner";

type SettingsForm = {
  session: Session;
};

export default function SettingsCard(session: SettingsForm) {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [avatarUploading, setAvatarUploading] = useState(false);

  // form schema zod -------------------------------------------------

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
      name: session.session.user?.name || undefined,
      email: session.session.user?.email || undefined,
      image: session.session.user.image || undefined,
      isTwoFactorEnabled: session.session.user.isTwoFactorEnabled || undefined,
    },
  });

  // delete account and ussers -------------------------------------------------

  async function deleteUserAccount(id: string) {
    const data = await DeleteAccount({ id });

    if (!data) return new Error("No Data Found");

    return;
  }

  // excecute actions form ------------------------------------------

  const { execute, status } = useAction(settings, {
    onSuccess: (data) => {
      if (data.data?.error) return toast.error(data.data.error);
      if (data.data?.success) return toast.success(data.data.success);
    },
    onError: (error) => {
      setError("Something went wrong");
    },
  });

  // excecute actions form submit ------------------------------------------

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    execute(values);
  };

  // main component ------------------------------------------

  return (
    <Card className="mx-[5%] mb-20 fullHdMinWidth:mx-[10%]">
      <CardHeader className="w-full items-center">
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* name -----------------------------------------------------  */}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Input name"
                      disabled={status === "executing"}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* image -----------------------------------------------------  */}

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avatar</FormLabel>
                  <div className="flex items-center gap-4">
                    {!form.getValues("image") && (
                      <div className="font-bold">
                        {session.session.user?.name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                    {form.getValues("image") && (
                      <Image
                        className="rounded-full"
                        src={form.getValues("image")!}
                        alt="User image"
                        width={42}
                        height={42}
                      />
                    )}

                    <UploadButton
                      className="scale-75 ut-button:ring-primary ut-label:bg-red-50  ut-button:bg-primary/75  hover:ut-button:bg-primary/100 ut:button:transition-all ut-button:duration-500  ut-label:hidden ut-allowed-content:hidden"
                      endpoint="avatarUploader"
                      onUploadBegin={() => {
                        setAvatarUploading(true);
                      }}
                      onUploadError={(error) => {
                        form.setError("image", {
                          type: "validate",
                          message: error.message,
                        });
                        setAvatarUploading(false);
                        return;
                      }}
                      onClientUploadComplete={(res) => {
                        form.setValue("image", res[0].url!);
                        setAvatarUploading(false);
                        return;
                      }}
                      content={{
                        button({ ready }) {
                          if (ready) return <div>Change Avatar</div>;
                          return <div>Uploading .....</div>;
                        },
                      }}
                    />
                  </div>
                  <FormControl>
                    <Input
                      placeholder="User image"
                      type="hidden"
                      disabled={status === "executing"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* password -----------------------------------------------------  */}

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Old Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Input older password"
                      type="password"
                      disabled={
                        status === "executing" || session.session.user.isOAuth
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* new password -----------------------------------------------------  */}

            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Input new password"
                      type="password"
                      disabled={
                        status === "executing" || session.session.user.isOAuth
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormDescription>
              Change and create new password above.
            </FormDescription>

            {/* two factor identification -----------------------------------------------------  */}

            <FormField
              control={form.control}
              name="isTwoFactorEnabled"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Two Factor Authentication</FormLabel>
                  <FormControl>
                    <Switch
                      disabled={
                        status === "executing" || session.session.user.isOAuth
                      }
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription>
                    Enable or disabled your two factor authentication
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-2 items-start">
              {/* update account & user setting ------------------------------------------- */}

              <Button
                disabled={status === "executing" || avatarUploading}
                type="submit"
              >
                Update your setting
              </Button>

              <span>or</span>

              {/* delete account & user ------------------------------------------- */}

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Delete Accout</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        if (!session.session.user.id) {
                          console.log("User ID not found");
                          return;
                        }
                        deleteUserAccount(session.session.user.id);

                        signOut();

                        return;
                      }}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
