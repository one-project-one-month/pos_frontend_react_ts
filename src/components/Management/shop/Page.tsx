import { useCustomQuery } from "@/hook/management/useCustomQuery"
import DataTable from "./DataTable"
import { queryFn } from "@/services/api/management/queryFn"
import { TCustomer, TShop } from "@/type/type"
import { shopColumns, customerColumns } from "./Columns"



const DataTablePage = () => {
    const { data: shops } = useCustomQuery<TShop[]>("shops", () => queryFn("shops"), 0)
    const { data: customers } = useCustomQuery<TCustomer[]>("customers", () => queryFn("customers"), 0)
    return (
        <>
            <DataTable columns={shopColumns} data={shops ? shops : []} />
            <DataTable columns={customerColumns} data={customers ? customers : []} />
        </>

    )
}

export default DataTablePage