import ProductCategorySelectSection from "@/components/Product/ProductCategorySelectSection";
import ProductListSection from "@/components/Product/ProductListSection.tsx";

export default function Products() {
    return (
        <section className={"w-full p-8"}>
            <ProductCategorySelectSection />
            <ProductListSection />
        </section>
    );
}