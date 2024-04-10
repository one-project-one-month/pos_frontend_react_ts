import {useBillingCartStore} from "@/store/billingCartStore.ts";
import BillingSectionSearchBar from "@/components/Product/BillingSectionSearchBar.tsx";

export default function BillingSection() {
    const {cart} = useBillingCartStore()

    console.log(cart)

    return (
        <div className={"p-6 bg-blue-50 rounded"}>
            Billing Section
            <BillingSectionSearchBar/>
        </div>
    )
}