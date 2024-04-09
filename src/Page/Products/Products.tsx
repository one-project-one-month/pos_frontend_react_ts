import ProductCategorySelectSection from "@/components/Product/ProductCategorySelectSection";
import ProductList from "@/components/Product/ProductList";

export default function Products() {
    return (
        <section className={"w-full p-8"}>
            <ProductCategorySelectSection />
            <ProductList />
        </section>
    );
}