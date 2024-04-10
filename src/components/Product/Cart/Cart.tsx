import CartList from "@/components/Product/Cart/CartList.tsx";
import {useBillingCartStore} from "@/store/billingCartStore.ts";
import CartEmpty from "@/components/Product/Cart/CartEmpty.tsx";

export default function Cart(){
    const {cart} = useBillingCartStore()

    return (
        <div>
            {cart.length === 0 ? <CartEmpty/> : <CartList/>}
        </div>
    )
}