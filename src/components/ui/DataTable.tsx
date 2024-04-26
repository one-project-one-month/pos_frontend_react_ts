import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableHeader, TableHead, TableCell, TableBody, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { useLocation, useNavigate } from "react-router-dom";
import { Plus } from "lucide-react"
import { capitalize, cn } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[]
    endPont: string,
    filterField: string,
    className?: string,
    notInclude?: boolean,    
    pageSize?: number
}

const DataTable = <TData, TValue>({ columns, data, endPont, filterField, className, pageSize, notInclude }: DataTableProps<TData, TValue>) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: pageSize ?? 10
    })


    const table = useReactTable({
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
    })


    return (
        <div className={cn("flex flex-col w-full mx-8 my-4", className)}>
            <div className="flex justify-between mb-4 items-center">
                <Input
                    placeholder={`Filter by ${filterField}`}
                    value={(table.getColumn(filterField)?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn(filterField)?.setFilterValue(event.target.value)
                    }
                    className="w-1/3"
                />
                {
                    notInclude ? <>Date filter</> : <Button
                    variant="outline"
                    size="default"
                    className="ml-2"
                    onClick={() => navigate(`${pathname}/create`)}
                >
                    <Plus size={18} className="mr-2" /> Add {capitalize(endPont)}
                </Button>
                }
            </div>

            <div className="rounded-md border">
                <Table>
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
                                                )
                                            }
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))
                        }
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
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
                                    No results
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>

            </div>
        </div>

    )
}

export default DataTable