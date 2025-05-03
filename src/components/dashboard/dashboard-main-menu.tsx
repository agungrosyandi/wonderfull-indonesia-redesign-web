"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export default function DashboardMainMenu({ user }: Session) {
  return (
    <>
      <section className=" bg-slate-500">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbSeparator className="hidden tabletMinWidth:block" />
                    <BreadcrumbItem className="flex w-[80%] justify-between items-center gap-10">
                      <BreadcrumbPage>{user?.email}</BreadcrumbPage>
                      <Button
                        onClick={() => signOut({ redirectTo: "/" })}
                        variant={"destructive"}
                      >
                        Log out
                      </Button>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <div className="grid auto-rows-min gap-4 desktopMinWidth:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50"></div>
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
              </div>
              <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 desktopMinWidth:min-h-min" />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </section>
      )
    </>
  );
}
