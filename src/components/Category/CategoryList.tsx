import {TProductCategory} from "@/type/type.ts";
import {useQuery} from "@tanstack/react-query";
import apiClient from "@/services/api/api-client.ts";
import DataTable from "@/components/ui/DataTable.tsx";
import {categoryColumns} from "@/components/Category/CategoryColumn.tsx";

const tempQueryFn = async () => {
    const {data} = await  apiClient.get(`/product-categories`)
    return data.data?.categories
}


export default function CategoryList() {
     const {data: categories } = useQuery<TProductCategory[]>({
         queryKey: ["product-categories"],
         queryFn: tempQueryFn,
     })

    return (
        <DataTable
            columns={categoryColumns}
            data={categories ? categories : []}
            endPont="shops"
            filterField="productCategoryName" />
    );
}