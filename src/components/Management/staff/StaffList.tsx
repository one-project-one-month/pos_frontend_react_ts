import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { TStaff } from "@/type/type"
import DataTable from "@/components/ui/DataTable"
import { staffColumns } from "./StaffColumns"




const StaffList = () => {
    const { data: staffs } = useCustomQuery<TStaff>(
        "staffs",

    )


    return (
        <DataTable
            columns={staffColumns}
            data={staffs ? staffs : []}
            endPont="staffs"
            filterField="staffName"
        />
    )
}

export default StaffList