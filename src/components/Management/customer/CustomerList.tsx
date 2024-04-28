import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { TCustomer } from "@/type/type"
import DataTable from "@/components/ui/DataTable"
import { customerColumns } from "./customerColumn"
import ListSkeleton from "@/components/Product/ListSekeleton"




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
                (
                    <div className="m-8 flex">
                        <ListSkeleton className="w-[600px] h-[80vh]" />
                    </div>
                )
            }
        </>




    )
}

export default CustomerList