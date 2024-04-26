import { TInvoice } from '@/type/type';
import { ColumnDef } from '@tanstack/react-table';

export const InvoiceColumn: ColumnDef<TInvoice, any>[] = [
    {
        accessorKey: "",
        header: "No.",
        cell: ({row}) => (
            <p>{parseInt(row.id) + 1}</p>
        )
    },
    {
        accessorKey: "voucherNo",
        header: "Voucher No",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("voucherNo")}</div>
        ),
    },
    {
        accessorKey: "dateTime",
        header: "Date",
        cell: ({row}) => {
            const date = new Date(row.getValue('dateTime'));
            const formattedDateTime = new Intl.DateTimeFormat("en-US", {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            }).format(date);
            return <p>{formattedDateTime}</p>
        }
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
        header: "Payment Type",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("paymentType")}</div>
        ),
    },

    {
        accessorKey: "staffCode",
        header: "Staff Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("staffCode")}</div>
        ),
    },
    {
        accessorKey: "detail",
        header: "Detail",
        // cell: ({ row }) => {
        //     return (
        //         <p className="underline cursor-pointer" onClick={() => navigate(`/sale-invoice/detail`,
        //             {
        //                 state: {
        //                     detail: row?.original
        //                 }
        //             })}>Detail</p>
        //     )
        // }
    }
]