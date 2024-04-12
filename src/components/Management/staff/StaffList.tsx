import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { Table, TableHead, TableHeader, TableBody, TableCell, TableRow } from "../../ui/table"
import { queryFn } from "@/services/api/management/queryFn"
import { TStaff } from "@/type/type"
import { Button } from "../../ui/button"
import { Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"



const StaffList = () => {
    const { data: staffs } = useCustomQuery<TStaff[]>(
        "staffs",
        () => queryFn("staffs"),
        0,
    )
    const navigate = useNavigate()




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
                            staffs ? (
                                Object.keys(staffs[0]).map((key) => (
                                    <TableHead key={key} className="w-[100px]">{key}</TableHead>
                                ))
                            ) : null
                        }
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        staffs ? (
                            staffs.map((staff) => (
                                <TableRow key={staff.id}>
                                    {Object.values(staff).map((value) => (
                                        <TableCell key={value} className="font-mediun">{value}</TableCell>
                                    ))}
                                </TableRow>
                            ))

                        ) : null
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default StaffList