import CartTable from "@/components/Product/Cart/CartTable.tsx";
import CartSummary from "@/components/Product/Cart/CartSummary.tsx";



export default function CartList() {
    return (
        <div>
            <CartTable />
            <div className="w-full h-[1px] border border-tertiary border-dashed">
                <span></span>
            </div>
            <CartSummary />
        </div>
    );
}

