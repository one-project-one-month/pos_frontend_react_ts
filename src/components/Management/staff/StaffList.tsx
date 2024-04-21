import { useCustomQueryByPage } from "@/hook/management/useCustomQuery"
import { Table, TableHead, TableHeader, TableBody, TableCell, TableRow } from "../../ui/table"

import { TStaff } from "@/type/type"
import { Button } from "../../ui/button"
import { EllipsisVertical, Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useDeleteQuery } from "@/hook/management/useDeleteQuery"
import { toast } from "@/components/ui/use-toast"
import { capitalize } from "@/lib/utils"




const StaffList = () => {
    const { data: staffs } = useCustomQueryByPage<TStaff>(
        "staffs",
        1,
    )
    const { mutate } = useDeleteQuery("staffs")
    const navigate = useNavigate()

    const handleDelete = (id: string) => {
        mutate({ url: "staffs", id })
        toast({ description: "Successfully Deleted" })
    }




    return (
        <div className="w-[80%] flex flex-col m-8">
            <div className="flex justify-end mb-2">
                <Button
                    variant="outline"
                    size="default"
                    onClick={() => navigate("/management/staffs/create")}
                >
                    <Plus size={18} className="mr-2" /> Add staff
                </Button>
            </div>

            <Table className="rounded-md border">
                <TableHeader>
                    <TableRow>
                        {
                            staffs?.data ? (
                                Object.keys(staffs.data[0]).map((key) => (
                                    <TableHead key={key} className="w-[100px]">{capitalize(key)}</TableHead>
                                ))
                            ) : null

                        }
                        <TableHead> Actions</TableHead>
                    </TableRow>

                </TableHeader>
                <TableBody>
                    {
                        staffs?.data ? (
                            staffs.data.map((staff) => (
                                <TableRow key={staff.id}>
                                    {Object.values(staff).map((value) => (
                                        <TableCell key={value} className="font-mediun">{value}</TableCell>
                                    ))}
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <EllipsisVertical />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuContent sideOffset={6} className="min-w-6">
                                                    <DropdownMenuItem className="flex flex-col">
                                                        <Button className="w-full  mb-2" variant={"outline"} onClick={() => handleDelete(staff.id)}>Delete</Button>
                                                        <Button className="w-full" variant={"outline"} onClick={() => navigate(`edit/${staff.id}`)}>Edit</Button>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell>
                                    No Data
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default StaffList