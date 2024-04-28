import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { TCustomer } from "@/type/type"
import DataTable from "@/components/ui/DataTable"
import { customerColumns } from "./customerColumn"
import ListSkeleton from "@/components/Product/ListSekeleton"




const CustomerList = () => {
    const { data: customers, isFetched, error } = useCustomQuery<TCustomer>(
        "customer",
    )

    return (
        <div className="w-full">
            {isFetched ? (
                <DataTable
                    data={customers ? customers : []}
                    columns={customerColumns}
                    endPont="customers"
                    filterField="customerName"
                    error={error}
                />
            ) :
                (
                    <div className="m-8 flex">
                        <ListSkeleton />
                    </div>
                )
            }
        </div>




    )
}

export default CustomerList