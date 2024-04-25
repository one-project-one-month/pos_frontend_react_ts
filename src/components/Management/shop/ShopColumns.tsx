import { Button } from "@/components/ui/button";
import DropdownComponent from "@/components/ui/dropdown-component";
import { toast } from "@/components/ui/use-toast";
import { useDeleteQuery } from "@/hook/management/useDeleteQuery";
import { TShop } from "@/type/type";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

const CellComponent = ({ row }: { row: any }) => {
    const customer = row.original;
    const { mutate } = useDeleteQuery("shops")
    const navigator = useNavigate()

    const handleDelete = (id: string) => {
        mutate({ url: "shops", id })
        toast({ description: "Successfully Deleted" })
    }

    return (
        <DropdownComponent>
            <Button
                className="w-full 
                 mb-2" variant={"outline"}
                onClick={() => handleDelete(customer.id)}
            >
                Delete
            </Button>
            <Button
                className="w-full"
                variant={"outline"}
                onClick={() => navigator(`edit/${customer.id}`)}>
                Edit</Button>
        </DropdownComponent>
    )
}

export const shopColumns: ColumnDef<TShop>[] = [
    {
        accessorKey: "shopCode",
        header: "ShopCode"
    },
    {
        accessorKey: "shopName",
        header: "ShopName"
    },
    {
        accessorKey: "mobileNo",
        header: "MobileNo"
    },
    {
        accessorKey: "address",
        header: "Address"
    },
    {
        id: "actions",
        cell: CellComponent
    }
]
