import CartTable from "@/components/Product/Cart/CartTable.tsx";
import CartSummary from "@/components/Product/Cart/CartSummary.tsx";



export default function CartList() {
    return (
        <div>
            <CartTable/>
            <CartSummary/>
        </div>
    );
}

