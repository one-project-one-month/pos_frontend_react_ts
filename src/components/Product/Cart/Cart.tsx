import CartList from "@/components/Product/Cart/CartList.tsx";
import {useCartStore} from "@/store/cartStore.ts";
import CartEmpty from "@/components/Product/Cart/CartEmpty.tsx";

export default function Cart(){
    const {products} = useCartStore()

    return (
        <div>
            {products.length === 0 ? <CartEmpty/> : <CartList/>}
        </div>
    )
}