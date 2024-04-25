import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useDeleteQuery } from "@/hook/management/useDeleteQuery";
import { TStaff } from "@/type/type";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";


const CellComponent = ({ row }: { row: any }) => {
    const staff = row.original;
    const { mutateAsync } = useDeleteQuery("staffs")
    const navigator = useNavigate()

    const handleDelete = async (id: string) => {
        console.log(id)
        await mutateAsync({ url: "staffs", id })
        toast({ description: "Successfully Deleted" })
    }

    return (
        <div className="flex">
            <Button
                className="mr-3 bg-red-600 text-white"
                variant={"outline"}
                onClick={() => handleDelete(staff.staffId)}
            >
                Delete
            </Button>
            <Button
                className="bg-green-600 text-white"
                variant={"outline"}
                onClick={() => navigator(`edit/${staff.staffId}`)}>
                Edit</Button>
        </div>


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
    // {
    //     accessorKey: "dateOfBirth",
    //     header: "DateOfBirth"
    // },
    // {
    //     accessorKey: "mobileNo",
    //     header: "MobileNo"
    // },
    // {
    //     accessorKey: "address",
    //     header: "Address"
    // },
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