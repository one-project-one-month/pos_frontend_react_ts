import { Button } from "@/components/ui/button.tsx";
import { useCartStore } from "@/store/cartStore.ts";
import { useDiscountStore } from "@/store/discountStore.ts";
import {getCart} from "@/lib/utils.ts";

export default function CartSummaryControl() {
    const { staffCode,clearCart } = useCartStore();
    const {setNoDiscount } = useDiscountStore();
    const products = getCart();

    const cancelOrderBtnHandler = () => {
        clearCart();
        setNoDiscount();
    };


    const placeOrderBtnHandler = () => {
        clearCart();
        setNoDiscount();
        console.log({
            products: products,
            staffCode: staffCode,
        })
    };

    return (
        <div className={"flex justify-center items-center gap-x-4"}>
            <Button className={"bg-orange-500 text-[17px] font-bold dark:bg-amber-300 dark:text-red-600"} onClick={cancelOrderBtnHandler}>Cancel
                Order</Button>
            <Button className={"text-[17px] font-bold dark:bg-blue-300 dark:hover:bg-emerald-400"} onClick={placeOrderBtnHandler} disabled={!staffCode}>Place Order</Button>
        </div>
    );
}