import {TProductCategory} from "@/type/type.ts";
import {useQuery} from "@tanstack/react-query";
import DataTable from "@/components/ui/DataTable.tsx";
import {categoryColumns} from "@/components/Category/CategoryColumn.tsx";
import {getProductCategories} from "@/services/api/productApi.ts";


export default function CategoryList() {
    const {data: categories} = useQuery<TProductCategory[]>({
        queryKey: ["product-categories"],
        queryFn: getProductCategories,
    });


    return (
        <DataTable
            columns={categoryColumns}
            data={categories ? categories : []}
            endPont="categories"
            filterField="productCategoryName"/>
    );
}