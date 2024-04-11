import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { Table, TableHead, TableHeader, TableBody, TableCell, TableRow } from "../ui/table"
import { queryFn } from "@/services/api/management/queryFn"
import { TStaff } from "@/type/type"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"



const StaffList = () => {
    const { data: staffs } = useCustomQuery<TStaff[]>(
        "staffs",
        () => queryFn("staffs"),
        0,
    )

    return (
        <div className="w-[80%] flex flex-col m-8">
            <div className="flex justify-end mb-2">
                <Button
                    variant="outline"
                    size="default"
                // onClick={() => table.nextPage()}
                // disabled={!table.getCanNextPage()}
                >
                    <Plus size={18} className="mr-2" /> Add staff
                </Button>
            </div>

            <Table className="rounded-md border">
                <TableHeader>
                    <TableRow>
                        {/* {
                            Object.keys(staffs).map((staff, i) => (
                                <TableHead key={staff.id} className="w-[100px]">{Object.keys(staff)[i]}</TableHead>
                            ))
                        } */}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {staffs?.map(staff => (
                        <TableRow key={staff.id}>
                            <TableCell className="font-mediun">{staff.id}</TableCell>
                            <TableCell className="font-mediun">{staff.staffCode}</TableCell>
                            <TableCell className="font-mediun">{staff.staffName}</TableCell>
                            <TableCell className="font-mediun">{staff.position}</TableCell>
                            <TableCell className="font-mediun">{staff.gender}</TableCell>
                            <TableCell className="font-mediun">{staff.dateOfBirth.toString()}</TableCell>
                            <TableCell className="font-mediun">{staff.address}</TableCell>
                            <TableCell className="font-mediun">{staff.mobileNo}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default StaffList