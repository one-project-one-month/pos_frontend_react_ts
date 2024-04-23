import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { TCustomer } from "@/type/type"
import DataTable from "@/components/ui/DataTable"
import { customerColumns } from "./customerColumn"




const CustomerList = () => {
    const { data: customers } = useCustomQuery<TCustomer>(
        "customers",
    )

    return (
        <DataTable
            columns={customerColumns}
            data={customers ? customers : []}
            endPont="customers"
            filterField="customerName" />
    )
}

export default CustomerList