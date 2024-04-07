import ProductSearchBar from "@/components/ProductSearchBar.tsx";
import ProductList from "@/components/ProductList.tsx";
import ProductCategoryFilter from "@/components/ProductCategoryFilter.tsx";
export default function Products() {
    return (
        <section className={"w-full p-8"}>
            <ProductSearchBar/>
            <ProductCategoryFilter/>
            <ProductList/>
        </section>
    );
}