import { Button } from "@/components/ui/button.tsx";
import { useCartStore } from "@/store/cartStore.ts";
import { useDiscountStore } from "@/store/discountStore.ts";
import { getCart } from "@/lib/utils.ts";
import { useCreateNew } from "@/hook/management/useAddQuery.ts";
import { toast } from "@/components/ui/use-toast";
import Loading from "@/components/ui/loading";

export default function CartSummaryControl() {
    const { staffCode, clearCart } = useCartStore();
    const { setNoDiscount } = useDiscountStore();
    const products = getCart();
    const { mutateAsync } = useCreateNew("sale-invoices");
    const cancelOrderBtnHandler = () => {
        clearCart();
        setNoDiscount();
    };


    const placeOrderBtnHandler = async () => {
        clearCart();
        setNoDiscount();
        toast({ description: <Loading message="Creating your invoice..." className="p-0" /> })
        await mutateAsync({ formData: { products: products, staffCode: staffCode }, route: "sale-invoices" })
        toast({ description: "✅ Success" })
    };

    return (
        <div className={"flex justify-center items-center gap-x-4"}>
            <Button
                variant="destructive"
                className={" text-[17px] text-secondary/70 font-bold dark:text-slate-400 hover:text-black"}
                onClick={cancelOrderBtnHandler}
            >
                Cancel Order
            </Button>
            <Button
                className={"text-[17px] font-bold text-white dark:text-black hover:text-white  dark:bg-dark-tertiary "}
                onClick={placeOrderBtnHandler} disabled={!staffCode}
            >
                Place Order
            </Button>
        </div>
    );
}