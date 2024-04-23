import ProductListItem from "@/components/Product/ProductList/ProductListItem.tsx";
import { useCurrentPage } from "@/hook/useCurrentPage.ts";
import { useCustomQuery } from "@/hook/management/useCustomQuery.ts";
import { TProduct } from "@/type/type.ts";
import useRenderPagination from "@/hook/management/useRenderPagination.tsx";
import { useFilterData } from "@/hook/useFilteredData.ts";



export default function ProductList() {

    // const { page } = useCurrentPage();
    // const { data: products } = useCustomQuery<TProduct>("products")
    // const { filteredData } = useFilterData(products ? products : [])
    // const paginationElement = useRenderPagination({ next: products?.next, prev: products?.prev, page: page });
    // return (
    //     <>
    //         <ul className={"max-w-productList p-6 flex flex-col gap-y-5 rounded bg-[#eee]"}>
    //             {filteredData && filteredData.map(ele => <ProductListItem key={ele.productCode} productData={ele} />)}
    //         </ul>
    //         {paginationElement}
    //     </>
    // );
}