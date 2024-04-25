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
            <Button className={"bg-orange-500 text-[17px] font-bold"} onClick={cancelOrderBtnHandler}>Cancel
                Order</Button>
            <Button className={"text-[17px] font-bold"} onClick={placeOrderBtnHandler} disabled={!staffCode}>Place Order</Button>
        </div>
    );
}