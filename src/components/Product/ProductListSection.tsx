import ProductSearchBar from "@/components/Product/ProductSearchBar";
import {useSearchParams} from "react-router-dom";
import ProductList from "@/components/Product/ProductList.tsx";
import SearchedProductList from "@/components/Product/SearchedProductList.tsx";

export default function ProductListSection() {
    const [searchParams] = useSearchParams();

    const searchString = searchParams.get("search") as string;

    return (
        <div className={"my-4"}>
            <ProductSearchBar/>
            {searchString  && <SearchedProductList searchString={searchString}/>}
            {!searchString && <ProductList/>}
        </div>
    );
}

