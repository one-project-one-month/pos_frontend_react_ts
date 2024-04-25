import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { TCustomer } from "@/type/type"
import DataTable from "@/components/ui/DataTable"
import { customerColumns } from "./customerColumn"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"




const CustomerList = () => {
    const { data: customers, isFetched } = useCustomQuery<TCustomer>(
        "customer",
    )

    return (
        <>
            {isFetched ? (
                <DataTable
                    data={customers ? customers : []}
                    columns={customerColumns}
                    endPont="customers"
                    filterField="customerName" />
            ) :
                <div className="flex items-center  justify-center w-full" >
                    <Button className="bg-white text-black" >
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Fetching data
                    </Button>
                </div>}
        </>




    )
}

export default CustomerList