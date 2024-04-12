import {Button} from "@/components/ui/button.tsx";
import {useBillingCartStore} from "@/store/billingCartStore.ts";
import {useDiscountStore} from "@/store/discountStore.ts";

export default function CartSummaryControl() {
    const {clearCart} = useBillingCartStore();
    const {setNoDiscount} = useDiscountStore();

    const cancelOrderBtnHandler = () => {
        clearCart();
        setNoDiscount();
    };

    return (
        <div className={"flex justify-center items-center gap-x-4"}>
            <Button className={"bg-orange-500 text-[17px] font-bold"} onClick={cancelOrderBtnHandler}>Cancel Order</Button>
            <Button className={"text-[17px] font-bold"}>Place Order</Button>
        </div>
    );
}