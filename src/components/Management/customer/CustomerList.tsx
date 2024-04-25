import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { TCustomer } from "@/type/type"
import DataTable from "@/components/ui/DataTable"
import { customerColumns } from "./customerColumn"
import Loading from "@/components/ui/loading"




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
                    <Loading />
                )
            }
        </>




    )
}

export default CustomerList