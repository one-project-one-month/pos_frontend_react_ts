import { useQuery } from "@tanstack/react-query";
import { useProductCategoryFilterState } from "@/store/productCategoryFilerStore.ts";
import ProductListItem from "@/components/Product/ProductListItem.tsx";
import ProductListPagination from "@/components/Product/ProductListPagination.tsx";
import { productByPageQuery } from "@/services/api/query";
import {useSearchParams} from "react-router-dom";


export default function ProductList() {
    const [searchParams] = useSearchParams()
    const currPage = searchParams.get("page") ?? 1;

    const { data } = useQuery(productByPageQuery(+currPage));
    const { currCategory } = useProductCategoryFilterState();
    const filteredData = currCategory.length !== 0 ? data && data.data.filter(item => currCategory.indexOf(item.productCategoryCode) !== -1) : data?.data;
    return (
        <>
            <ul className={"max-w-productList p-6 flex flex-col gap-y-5 rounded bg-[#eee]"}>
                {filteredData && filteredData.map(ele => <ProductListItem key={ele.productCode} productData={ele} />)}
            </ul>
            <ProductListPagination  next={(data ? data.next : null)} prev={(data ? data.prev : null)} />
        </>
    );
}