
import ProductList from "@/components/ProductList.tsx";

import ProductCategorySelectSection from "@/components/ProductCategorySelectSection.tsx";
export default function Products() {
    return (
        <section className={"w-full p-8"}>
            <ProductCategorySelectSection/>
            <ProductList/>

        </section>
    );
}