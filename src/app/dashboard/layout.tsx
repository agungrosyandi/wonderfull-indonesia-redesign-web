import { LayoutDashboard, Settings, SquarePen, Truck } from "lucide-react";

import React from "react";
import { auth } from "../../../server/auth";
import DashboardNav from "@/components/navigation/dashboard-nav";

export default async function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  const userLinks =
    session?.user.role === "user"
      ? ([
          {
            id: 1,
            label: "Settings",
            path: "/dashboard/settings",
            icon: <Settings size={20} />,
          },
        ] as const)
      : ([] as const);

  const adminLinks =
    session?.user.role === "admin"
      ? [
          {
            id: 1,
            label: "Main Dashboard",
            path: "/dashboard/main-dashboard",
            icon: <LayoutDashboard size={20} />,
          },

          {
            id: 2,
            label: "Tulis Konten",
            path: "/dashboard/tulis-konten",
            icon: <SquarePen size={20} />,
          },
          {
            id: 3,
            label: "Konten Publish",
            path: "/dashboard/konten-publish",
            icon: <Truck size={20} />,
          },
          {
            id: 4,
            label: "Settings",
            path: "/dashboard/settings",
            icon: <Settings size={20} />,
          },
        ]
      : [];

  const userContributorLinks =
    session?.user.role === "user-contributor"
      ? [
          {
            id: 1,
            label: "Tulis Konten",
            path: "/dashboard/tulis-konten",
            icon: <SquarePen size={20} />,
          },

          {
            id: 2,
            label: "Konten Publish",
            path: "/dashboard/konten-publish",
            icon: <Truck size={20} />,
          },

          {
            id: 2,
            label: "Settings",
            path: "/dashboard/settings",
            icon: <Settings size={20} />,
          },
        ]
      : [];

  const allLinks = [...adminLinks, ...userContributorLinks, ...userLinks];

  return (
    <>
      <DashboardNav allLinks={allLinks} />
      {children}
    </>
  );
}
