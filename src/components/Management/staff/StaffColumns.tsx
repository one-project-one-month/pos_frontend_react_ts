import { Button } from "@/components/ui/button";
import Loading from "@/components/ui/loading";
import { toast } from "@/components/ui/use-toast";
import { useDeleteQuery } from "@/hook/management/useDeleteQuery";
import { TStaff } from "@/type/type";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";


const CellComponent = ({ row }: { row: { original: TStaff } }) => {
    const staff = row.original;
    const { mutateAsync } = useDeleteQuery("staffs")
    const navigator = useNavigate()

    const handleDelete = async (id: string) => {
        toast({ description: <Loading message="Deleting" className="p-0" /> })
        await mutateAsync({ url: "staffs", id })
        toast({ description: "✅ Successfully Deleted" })
    }

    return (
        <div className="flex">
            <Button
                className="mr-3 bg-zinc-700"
                variant={"default"}
                onClick={() => navigator(`edit/${staff.staffId}`)}
            >
                Edit
            </Button>
            <Button
                variant={"destructive"}
                onClick={() => handleDelete(staff.staffId)}
            >
                Delete
            </Button>
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
        header: "Actions",
        cell: CellComponent
    }
]