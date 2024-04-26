import {TProductCategory} from "@/type/type.ts";
import {useQuery} from "@tanstack/react-query";
import DataTable from "@/components/ui/DataTable.tsx";
import {categoryColumns} from "@/components/Category/CategoryColumn.tsx";
import {getProductCategories} from "@/services/api/productApi.ts";
import ListSkeleton from "@/components/Product/ListSekeleton.tsx";



export default function CategoryList() {
    const {data: categories,error, isFetched} = useQuery<TProductCategory[]>({
        queryKey: ["product-categories"],
        queryFn: getProductCategories,
        staleTime: 60 * 60 * 1000 * 365
    });


    return (

        <>
            {isFetched ? <DataTable
                columns={categoryColumns}
                data={categories ? categories : []}
                endPont="categories"
                filterField="productCategoryName"
                className={"w-[unset]"}
                pageSize={8}
                error={error}
            /> : <ListSkeleton className={"w-[80vw] mx-8 my-4"}/>
            }
        </>
    );
}