import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { TStaff } from "@/type/type"
import DataTable from "@/components/ui/DataTable"
import { staffColumns } from "./StaffColumns"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"




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
                <div className="flex items-center  justify-center w-full" >
                    <Button className="bg-white text-black" >
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Fetching data
                    </Button>
                </div>
            )}

        </>

    )
}

export default StaffList