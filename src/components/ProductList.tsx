import {useQuery, useQueryClient} from "@tanstack/react-query";
import {productByPageQuery} from "@/services/query.ts";
import {useProductCategoryFilterState} from "@/store/productCategoryFilerState.ts";
import {TProduct, TProductCategory} from "@/type/type.ts";
import {Badge} from "@/components/ui/badge.tsx";
import ProductListPagination from "@/components/ProductListPagination.tsx";
import {useState} from "react";
import ProductSearchBar from "@/components/ProductSearchBar.tsx";
import {useSearchParams} from "react-router-dom";
import {getProductByName} from "@/services/api.ts";


export default function ProductList() {
    const [searchParams] = useSearchParams();

    const searchString = searchParams.get("search") as string;

    const [page, setPage] = useState(1);
    const {data} = useQuery(productByPageQuery(page));
    const {currCategory} = useProductCategoryFilterState();
    const filteredData = currCategory.length !== 0 ? data && data.data.filter(item => currCategory.indexOf(item.productCategoryCode) !== -1) : data?.data;
    const searchQuery = useQuery({
        queryKey: ["search", "products", searchString],
        queryFn: async () => getProductByName(searchString)

    });

    return (
        <div className={"my-4"}>
            <ProductSearchBar/>
            <ul className={"max-w-productList p-6 flex flex-col gap-y-5 rounded bg-[#eee]"}>
                {searchQuery.data && searchQuery.data.map(ele => <ProductListItem key={ele.productCode}
                                                                                  productData={ele}/>)}
                {!searchQuery.data && filteredData && filteredData.map(ele => <ProductListItem key={ele.productCode}
                                                                                               productData={ele}/>)}
            </ul>
            <ProductListPagination handler={setPage} next={(data ? data.next : null)} prev={(data ? data.prev : null)} hidden={!!searchQuery.data}/>
        </div>
    );
}

function ProductListItem({productData}: { productData: TProduct }) {

    const queryClient = useQueryClient();
    const data = queryClient.getQueryData<TProductCategory[]>(["categories"]);
    const currentCategory = data && data.filter(item => item.productCategoryCode === productData.productCategoryCode)[0];


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
    );
}