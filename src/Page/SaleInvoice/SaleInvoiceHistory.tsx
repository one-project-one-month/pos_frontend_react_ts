import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { useQuery } from "@tanstack/react-query"
import { TInvoice } from "@/type/type.ts";
import { useNavigate } from "react-router-dom"
import { getInvoices } from "@/services/api/invoiceApi"

const SaleInvoiceHistory = () => {
    const { data }: { data?: TInvoice[] } = useQuery({
        queryKey: ["invoice"],
        queryFn: getInvoices
    })
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})

    const navigate = useNavigate();

    const columns: ColumnDef<TInvoice, any>[] = [
        {
            accessorKey: "id",
            header: "No.",
            cell: ({ row }) => (
                <p>{row.getValue("id")}</p>
            ),
        },
        {
            accessorKey: "voucherNo",
            header: "Voucher No",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("voucherNo")}</div>
            ),
        },
        {
            accessorKey: "customerCode",
            header: "Customer Name",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("customerCode")}</div>
            )
        },
        {
            accessorKey: "saleInvoiceDateTime",
            header: () => {
                return (
                    <p>
                        Date
                    </p>
                )
            },
            cell: ({ row }) => <div>{row.getValue("saleInvoiceDateTime")}</div>,
        },
        {
            accessorKey: "totalAmount",
            header: "Total Amount",
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue("totalAmount"))
                const formatted = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(amount)

                return <div>{formatted}</div>
            },
        },
        {
            accessorKey: "paymentType",
            header: "Payment",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("paymentType")}</div>
            )
        },

        {
            accessorKey: "staffCode",
            header: "Staff Name",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("staffCode")}</div>
            )
        },
        {
            accessorKey: "detail",
            header: "Detail",
            cell: ({ row }) => {
                return (
                    <p className="underline cursor-pointer" onClick={() => navigate(`/sale-invoice/detail`,
                        {
                            state: {
                                detail: row?.original
                            }
                        })}>Detail</p>
                )
            }
        }
    ]

    const table = useReactTable({
        data: data ? data : [],
        columns,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            columnFilters,
            columnVisibility,
        },
    })

    return (
        <div className="w-[80%] mx-auto my-10">
            <div className="w-full">
                <div className="flex justify-end gap-5 py-4">
                    <Input
                        placeholder="Filter voucher no...."
                        value={(table.getColumn("voucherNo")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                        table.getColumn("voucherNo")?.setFilterValue(event.target.value)
                        }
                        className="max-w-sm"
                    />
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
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
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
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                <div className="space-x-2">
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
            </div>
        </div>
    )
}

export default SaleInvoiceHistory;