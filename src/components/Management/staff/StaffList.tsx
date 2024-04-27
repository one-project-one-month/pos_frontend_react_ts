import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { TStaff } from "@/type/type"
import DataTable from "@/components/ui/DataTable"
import { staffColumns } from "./StaffColumns"
import ListSkeleton from "@/components/Product/ListSekeleton"


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
                <div className="m-8 flex">
                    <ListSkeleton className="w-[600px]" />
                </div>
            )}
        </>

    )
}

export default StaffList