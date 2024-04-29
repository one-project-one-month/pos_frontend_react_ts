import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable
} from "@tanstack/react-table";
import { Table as ShacnTable, TableHeader, TableHead, TableCell, TableBody, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useLocation, useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { capitalize, cn } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[]
    endPont: string,
    filterField: string,
    className?: string,
    notInclude?: boolean,
    pageSize?: number,
    dates?: React.ReactNode
    error?: Error | null
}


const DataTable = <TData, TValue>({ columns, data, endPont, filterField, className, pageSize, error, notInclude, dates }: DataTableProps<TData, TValue>) => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname === "/" ? "" : location.pathname;
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: pageSize ?? 10
    });


    const reactTable = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        autoResetPageIndex: false,
        state: {
            columnFilters,
            pagination
        }
    });


    return (
        <div className={cn("flex flex-col w-full mx-8 my-4", className)}>
            <div className="flex justify-between mb-4 items-center">
                <Input
                    placeholder={`Filter by ${filterField}`}
                    value={(reactTable.getColumn(filterField)?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        reactTable.getColumn(filterField)?.setFilterValue(event.target.value)
                    }
                    className="w-1/3 text-tertiary dark:text-dark-tertiary"
                />
                {
                    notInclude ? dates :
                        <Button
                            variant="outline"
                            size="default"
                            className="ml-2 dark:text-white"
                            onClick={() => navigate(`${pathName}/create`)}
                        >
                            <Plus size={18} className="mr-2" />
                            <span>Add {capitalize(endPont)}</span>
                        </Button>

                }
            </div>

            <div className="rounded-md border">
                <ShacnTable>
                    <TableHeader>
                        {reactTable.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )
                                            }
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))
                        }
                    </TableHeader>
                    <TableBody>
                        {reactTable.getRowModel().rows?.length ? (
                            reactTable.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className="dark:text-white"
                                >
                                    {row.getVisibleCells().map(cell => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    {error ? <span className={"font-bold text-xl text-red-600"}>{error.message}</span> :
                                        <span className="dark:text-white">"No result"</span>}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </ShacnTable>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    className="dark:text-white"
                    variant="outline"
                    size="sm"
                    onClick={() => reactTable.previousPage()}
                    disabled={!reactTable.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    className="dark:text-white"
                    variant="outline"
                    size="sm"
                >
                    {reactTable.getState().pagination.pageIndex + 1} / {reactTable.getPageCount()}
                </Button>
                <Button
                    className="dark:text-white"
                    variant="outline"
                    size="sm"
                    onClick={() => reactTable.nextPage()}
                    disabled={!reactTable.getCanNextPage()}
                >
                    Next
                </Button>

            </div>
        </div >

    );
};

export default DataTable;