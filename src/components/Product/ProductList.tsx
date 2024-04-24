import {TProduct} from "@/type/type.ts";
import {useQuery} from "@tanstack/react-query";
import DataTable from "@/components/ui/DataTable.tsx";

import {getProducts} from "@/services/api/productApi.ts";
import {productColumn} from "@/components/Product/ProductColumn.tsx";
import {Link} from "react-router-dom";


export default function ProductList() {
    const {data: products} = useQuery<TProduct[]>({
        queryKey: ["products"],
        queryFn: getProducts,
    });



    return (

        <section>
            <div className={"flex justify-end"}>
                <Link to={"create"} className={"p-3 bg-emerald-400 rounded text-white font-bold"} >
                    Create New Product
                </Link>
            </div>
            <DataTable
                columns={productColumn}
                data={products ? products : []}
                endPont="products"
                filterField="productName"
                className={"mx-0"}
            />
        </section>
    );
}