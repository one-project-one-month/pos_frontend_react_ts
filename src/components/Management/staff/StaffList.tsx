import { useCustomQueryByPage } from "@/hook/management/useCustomQuery"
import { Table, TableHead, TableHeader, TableBody, TableCell, TableRow, TableFooter } from "../../ui/table"

import { TStaff } from "@/type/type"
import { Button } from "../../ui/button"
import { Plus } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useDeleteQuery } from "@/hook/management/useDeleteQuery"
import { toast } from "@/components/ui/use-toast"
import { capitalize } from "@/lib/utils"
import DropdownComponnet from "@/components/ui/dropdown-component"
import useRenderPagination from "@/hook/management/useRenderPagination"
import { useCurrentPage } from "@/hook/useCurrentPage"




const StaffList = () => {
    const { page } = useCurrentPage()
    const [, setSearchParams] = useSearchParams()
    const { data: staffs } = useCustomQueryByPage<TStaff>(
        "staffs",
        page,
    )

    console.log(staffs)
    const { mutate } = useDeleteQuery("staffs")
    const navigate = useNavigate()

    const handleDelete = (id: string) => {
        mutate({ url: "staffs", id })
        if (staffs?.items! % 5 === 1) {
            setSearchParams({ page: String(Math.ceil((staffs?.items! / 5) - 1)) })
        }
        toast({ description: "Successfully Deleted" })
    }

    const paginationElement = useRenderPagination({ next: staffs?.next, prev: staffs?.prev, page: page })




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
                                        <DropdownComponnet>
                                            <Button className="w-full  mb-2" variant={"outline"} onClick={() => handleDelete(staff.id)}>Delete</Button>
                                            <Button className="w-full" variant={"outline"} onClick={() => navigate(`edit/${staff.id}`)}>Edit</Button>
                                        </DropdownComponnet>
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
                <TableFooter>
                    <TableRow>
                        <TableCell>
                            {paginationElement}
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}

export default StaffList