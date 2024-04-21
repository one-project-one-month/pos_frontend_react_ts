import ProductSearchBar from "@/components/Product/ProductSearchBar.tsx";
import ProductList from "@/components/Product/ProductList/ProductList.tsx";
import SearchedProductList from "@/components/Product/ProductList/SearchedProductList.tsx";
import ProductCategoryFilter from "@/components/Product/ProductCategoryFilter.tsx";
import {useSearchString} from "@/hook/useSearchString.ts";

export default function ProductListSection() {

    const {searchString} = useSearchString("search")

    return (
        <div className={"my-4"}>
            <ProductCategoryFilter />
            <ProductSearchBar />
            {searchString && <SearchedProductList searchString={searchString} />}
            {!searchString && <ProductList />}
        </div>
    );
}

