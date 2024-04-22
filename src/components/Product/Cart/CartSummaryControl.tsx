import { Button } from "@/components/ui/button.tsx";
import { useBillingCartStore } from "@/store/billingCartStore.ts";
import { useDiscountStore } from "@/store/discountStore.ts";
import { useInvoiceStore } from "@/store/invoiceStore.ts";
import { useNavigate } from "react-router-dom";

export default function CartSummaryControl() {
    const navigate = useNavigate();
    const { cart, clearCart } = useBillingCartStore();
    const { amount, setNoDiscount } = useDiscountStore();
    const { addToInvoiceStore, invoice } = useInvoiceStore();

    console.log(invoice)

    const cancelOrderBtnHandler = () => {
        clearCart();
        setNoDiscount();
    };


    const placeOrderBtnHandler = () => {
        addToInvoiceStore(cart, amount.coupon + amount.extra);
        clearCart();
        setNoDiscount();
        navigate("/sale-invoice")
    };

    return (
        <div className={"flex justify-center items-center gap-x-4"}>
            <Button className={"bg-orange-500 text-[17px] font-bold"} onClick={cancelOrderBtnHandler}>Cancel
                Order</Button>
            <Button className={"text-[17px] font-bold"} onClick={placeOrderBtnHandler}>Place Order</Button>
        </div>
    );
}