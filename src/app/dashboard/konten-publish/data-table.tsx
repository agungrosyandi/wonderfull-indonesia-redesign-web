"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

// export into main page konten-publish ------------------------

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="rounded-md mb-20 border px-[5%] fullHdMinWidth:px-[10%]">
      <Card>
        {/* main title ---------------------------- */}

        <CardHeader className="text-center">
          <CardTitle>Content List</CardTitle>
          <CardDescription className="py-2">
            Update delete & edit your content
          </CardDescription>
        </CardHeader>

        {/* table content  ---------------------------- */}

        <CardContent>
          <div>
            {/* filter search ------------------------------- */}

            <div className="py-5">
              <Input
                placeholder="Filter product"
                value={
                  (table.getColumn("title")?.getFilterValue() as string) ?? ""
                }
                onChange={(e) =>
                  table.getColumn("title")?.setFilterValue(e.target.value)
                }
              />
            </div>

            {/* table column list including id, title, description, image, and actions ---------------------- */}

            <Table>
              {/* table column details -------- */}

              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>

              {/* table column data  -------- */}

              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      <span>No results.</span>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>

            {/* button next & previous page --------------------------------------- */}

            <div className="flex justify-center mt-10 items-center gap-5">
              <Button
                disabled={!table.getCanPreviousPage()}
                onClick={() => table.previousPage()}
                variant={"outline"}
              >
                <ChevronLeftIcon />
                <span>Go to previous page</span>
              </Button>
              <Button
                disabled={!table.getCanNextPage()}
                onClick={() => table.nextPage()}
                variant={"outline"}
              >
                <span>Go to next page</span>
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
