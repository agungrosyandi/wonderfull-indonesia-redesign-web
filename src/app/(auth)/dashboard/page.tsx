import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";

import RedirectLoginMenu from "../component/RedirectLoginMenu";

export default async function Dashboard() {
  const session = await auth();
  console.log(session);
  const user = session?.user;

  const logOutGoogle = async () => {
    "use server";
    await signOut({ redirectTo: "/admin-auth" });
  };

  return user ? (
    <>
      (
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
                    <BreadcrumbItem className="hidden tabletMinWidth:block">
                      <BreadcrumbLink href="#">Admin Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden tabletMinWidth:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Welcome {user.name}</BreadcrumbPage>
                      <form action={logOutGoogle}>
                        <Button>log out</Button>
                      </form>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <div className="grid auto-rows-min gap-4 desktopMinWidth:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" />
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
  ) : (
    <>
      <RedirectLoginMenu />
    </>
  );
}
