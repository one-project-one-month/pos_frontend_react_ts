import BillingSection from "@/components/Product/BillingSection.tsx";
import ProductList from "@/components/Product/ProductList.tsx";


export default function Products() {
    return (
        <section className={"w-full p-8"}>
            <div className={"grid grid-cols-2 gap-x-8"}>
                <ProductList/>
                <BillingSection/>
            </div>
        </section>
    );
}