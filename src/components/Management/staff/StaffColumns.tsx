import { Button } from "@/components/ui/button";
import DropdownComponent from "@/components/ui/dropdown-component";
import { toast } from "@/components/ui/use-toast";
import { useDeleteQuery } from "@/hook/management/useDeleteQuery";
import { TStaff } from "@/type/type";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";


const CellComponent = ({ row }: { row: any }) => {
    const staff = row.original;
    const { mutate } = useDeleteQuery("staffs")
    const navigator = useNavigate()

    const handleDelete = (id: string) => {
        mutate({ url: "staffs", id })
        toast({ description: "Successfully Deleted" })
    }

    return (
        <DropdownComponent>
            <Button
                className="w-full 
                 mb-2" variant={"outline"}
                onClick={() => handleDelete(staff.id)}
            >
                Delete
            </Button>
            <Button
                className="w-full"
                variant={"outline"}
                onClick={() => navigator(`edit/${staff.id}`)}>
                Edit</Button>
        </DropdownComponent>
    )

}
export const staffColumns: ColumnDef<TStaff>[] = [
    {
        accessorKey: "staffCode",
        header: "StaffCode"
    },
    {
        accessorKey: "staffName",
        header: "StaffName"
    },
    {
        accessorKey: "dateOfBirth",
        header: "DateOfBirth"
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
        accessorKey: "gender",
        header: "Gender"
    },
    {
        accessorKey: "position",
        header: "Position"
    },
    {
        id: "actions",
        cell: CellComponent
    }
]