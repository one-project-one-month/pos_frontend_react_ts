import {useQuery, useQueryClient} from "@tanstack/react-query";
import {productQuery} from "@/services/query.ts";
import {useProductCategoryFilterState} from "@/store/productCategoryFilerState.ts";
import {TProduct, TProductCategory} from "@/type/type.ts";
import {Badge} from "@/components/ui/badge.tsx";

export default function ProductList() {
    const {data} = useQuery(productQuery());
    const {currCategory} = useProductCategoryFilterState();
    const filteredData = currCategory.length !==0 ? data && data.filter(item => currCategory.indexOf(item.productCategoryCode) !== -1) : data


    return (
        <div className={"my-4"}>
            <h2 className={"mb-4 text-xl font-bold"}>Choose Products</h2>
            <ul className={"max-w-[600px] p-6 flex flex-col gap-y-5 rounded bg-[#eee]"}>
                {filteredData && filteredData.map(ele => <ProductListItem key={ele.productCode} productData={ele}/>)}
            </ul>
        </div>
    )
}

function ProductListItem({productData}: {productData: TProduct}) {

    const queryClient = useQueryClient();
    const data = queryClient.getQueryData<TProductCategory[]>(["categories"])
    const currentCategory = data &&  data.filter(item => item.productCategoryCode === productData.productCategoryCode)[0]


return (
    <li className={"flex justify-between items-center bg-teal-50 py-4 px-8 rounded"}>
        <div className={"flex flex-col gap-y-4"}>
            <span className={"pl-2"}>{productData.productName}</span>
            {currentCategory && <Badge>{currentCategory.productCategoryName}</Badge>}
        </div>
        <span>
            ${productData.price}
        </span>
    </li>
)
}