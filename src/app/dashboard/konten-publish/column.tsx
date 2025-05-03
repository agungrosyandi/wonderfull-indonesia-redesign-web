"use client";

import { ColumnDef, Row } from "@tanstack/react-table";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

import { toast } from "sonner";
import { useAction } from "next-safe-action/hooks";
import Link from "next/link";
import { deleteProduct } from "../../../../server/actions/delete-konten";

type productColumn = {
  title: string;
  description: string;
  image: string;
  id: number;
};

const ActionCell = ({ row }: { row: Row<productColumn> }) => {
  // delete product actions from backend and also from database

  const { execute, status } = useAction(deleteProduct, {
    onSuccess: (data) => {
      if (data.data?.success) toast.success(data.data.success);
      if (data.data?.error) toast.error(data.data.error);
    },

    onExecute: () => {
      const promise = () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: "Sonner" }), 1000)
        );

      toast.promise(promise, {
        loading: "Loading...",
        success: () => {
          return `Konten berhasil di delete`;
        },
        error: "Error",
      });
    },
  });

  // option edit and delete product dropdownmenu

  const konten = row.original;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"}>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="dark:focus:bg-primary focus:bg-primary/50 cursor-pointer">
          <Link href={`/dashboard/tulis-konten?id=${konten.id}`}>
            Edit Konten
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => execute({ id: konten.id })}
          className="dark:focus:bg-destructive focus:bg-destructive/50 cursor-pointer"
        >
          Delete Konten
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// column table row list product

export const columns: ColumnDef<productColumn>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const cellImage = row.getValue("image") as string;
      const cellTitle = row.getValue("title") as string;

      return (
        <Image
          src={cellImage}
          alt={cellTitle}
          width={40}
          height={40}
          className="rounded-md"
        />
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ActionCell,
  },
];
