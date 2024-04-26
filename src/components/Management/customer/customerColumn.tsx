import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useDeleteQuery } from "@/hook/management/useDeleteQuery";
import { TCustomer } from "@/type/type";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

const CellComponent = ({ row }: { row: any }) => {
    const customer = row.original;
    const { mutate } = useDeleteQuery("shops")
    const navigator = useNavigate()

    const handleDelete = (id: string) => {
        mutate({ url: "customer", id })
        toast({ description: "Successfully Deleted" })
    }

    return (
        <div className="flex">
            <Button
                className="mr-3 bg-zinc-700"
                variant={"default"}
                onClick={() => navigator(`edit/${customer.customerId}`)}
            >
                Edit
            </Button>
            <Button
                variant={"destructive"}
                onClick={() => handleDelete(customer.customerId)}
            >
                Delete
            </Button>
        </div>
    )
}

export const customerColumns: ColumnDef<TCustomer>[] = [
    {
        accessorKey: "customerCode",
        header: "CustomerCode"
    },
    {
        accessorKey: "customerName",
        header: "CustomerName"
    },
    // {
    //     accessorKey: "customerMobilNo",
    //     header: "MobileNo"
    // },
    // {
    //     accessorKey: "customerDOB",
    //     header: "DateOfBirth"
    // },
    {
        accessorKey: "customerGender",
        header: "Gender"
    },
    // {
    //     accessorKey: "cusotmerStateCode",
    //     header: "StateCode"
    // },
    // {
    //     accessorKey: "customerTownShipCode",
    //     header: "TownshipCode"
    // },
    {
        id: "actions",
        cell: CellComponent
    }

]