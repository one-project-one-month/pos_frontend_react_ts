import ProductSearchBar from "@/components/Product/ProductSearchBar.tsx";
import ProductList from "@/components/Product/ProductList/ProductList.tsx";

import ProductCategoryFilter from "@/components/Product/ProductCategoryFilter.tsx";


export default function ProductListSection() {

    return (
        <div className={"my-4"}>
            <ProductCategoryFilter />
            <ProductSearchBar />
            <ProductList/>
        </div>
    );
}

