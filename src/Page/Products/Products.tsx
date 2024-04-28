import BillingSection from "@/components/Product/BillingSection.tsx";
import ProductList from "@/components/Product/ProductList.tsx";


export default function Products() {
    return (
        <section className="flex m-8 bg-slate-50">
            <ProductList />
            <BillingSection />
        </section>
    );
}