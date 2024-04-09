import ProductListSection from "@/components/Product/ProductListSection.tsx";
import ProductCategoryFilter from "@/components/Product/ProductCategoryFilter.tsx";

export default function Products() {
    return (
        <section className={"w-full p-8"}>
            <ProductCategoryFilter />
            <ProductListSection />
        </section>
    );
}