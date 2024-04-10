import {useBillingCartStore} from "@/store/billingCartStore.ts";
import BillingSectionSearchBar from "@/components/Product/BillingSectionSearchBar.tsx";
import Cart from "@/components/Product/Cart/Cart.tsx";

export default function BillingSection() {
    const {cart} = useBillingCartStore()

    console.log(cart)

    return (
        <div className={"p-6 bg-blue-50 rounded"}>
            <h2 className={"mb-4 text-lg font-bold"}>Billing Section</h2>
            <BillingSectionSearchBar/>
            <Cart/>
        </div>
    )
}