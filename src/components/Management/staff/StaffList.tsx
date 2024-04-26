import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { TStaff } from "@/type/type"
import DataTable from "@/components/ui/DataTable"
import { staffColumns } from "./StaffColumns"
import Loading from "@/components/ui/loading"


const StaffList = () => {
    const { data: staffs, isFetched } = useCustomQuery<TStaff>(
        "staffs",
    )

    return (
        <>
            {isFetched ? (
                <DataTable
                    columns={staffColumns}
                    data={staffs ? staffs : []}
                    endPont="staffs"
                    filterField="staffName"
                />
            ) : (
                <Loading message="Fetching Data" />
            )}
        </>

    )
}

export default StaffList