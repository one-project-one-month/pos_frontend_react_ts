import {TProduct} from "@/type/type.ts";
import {useQuery} from "@tanstack/react-query";
import DataTable from "@/components/ui/DataTable.tsx";

import {getProducts} from "@/services/api/productApi.ts";
import {productColumn} from "@/components/Product/ProductColumn.tsx";
import ListSkeleton from "@/components/Product/ListSekeleton.tsx";


export default function ProductList() {
    const {data: products} = useQuery<TProduct[]>({
        queryKey: ["products"],
        queryFn: getProducts,
        staleTime: 60 * 60 * 1000 * 365
    });


    return (

        <section>
            {products ? <DataTable columns={productColumn}
									data={products}
									endPont="products" filterField="productName"
									className={"mx-0"} pageSize={8}/>: <ListSkeleton/>}

        </section>
    );
}