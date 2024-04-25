import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { TShop } from "@/type/type"
import DataTable from "../../ui/DataTable"
import { shopColumns } from "./ShopColumns"



const ShopList = () => {
    const { data: shops, isLoading } = useCustomQuery<TShop>("shops")



    if (isLoading) {
        return <h1>Loading</h1>
    }

    return (
        <DataTable
            columns={shopColumns}
            data={shops ? shops : []}
            endPont="shops"
            filterField="shopName" />
    )
}

export default ShopList