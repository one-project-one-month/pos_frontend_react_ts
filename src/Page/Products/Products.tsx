import ProductListSection from "@/components/Product/ProductList/ProductListSection.tsx";
import BillingSection from "@/components/Product/BillingSection.tsx";


export default function Products() {
    return (
        <section className={"w-full p-8"}>
            <div className={"grid grid-cols-2 gap-x-8"}>
                <ProductListSection />
                <BillingSection/>
            </div>
        </section>
    );
}