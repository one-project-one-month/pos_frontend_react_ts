import { formattedDateTime } from '@/lib/utils';
import { TInvoice } from '@/type/type';
import { ColumnDef } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';

const routeToDetail = (row: any) => {
    const navigate = useNavigate();
    
    return (
        <p className="underline cursor-pointer" onClick={() => navigate(`/sale-invoice/detail`,
            {
                state: {
                    detail: row?.original
                }
            })}>Detail</p>
    )
}

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
    },
    {
        accessorKey: "dateTime",
        header: "Date",
        cell: ({row}) => {            
            return <p>{formattedDateTime(row.getValue('dateTime'))}</p>
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
    // {
    //     accessorKey: "paymentType",
    //     header: "Payment Type",
    //     cell: ({ row }) => (
    //         <div className="capitalize">{row.getValue("paymentType")}</div>
    //     ),
    // },

    {
        accessorKey: "staffCode",
        header: "Staff Name",
    },
    {
        accessorKey: "detail",
        header: "Detail",
        cell: ({ row }) => routeToDetail(row)
    }
]