import { getTotal } from "@/lib/utils.ts";
import Discount from "@/components/Product/Cart/Discount.tsx";
import { useDiscountStore } from "@/store/discountStore.ts";
import CartSummaryControl from "@/components/Product/Cart/CartSummaryControl.tsx";


export default function CartSummary() {

    const { amount } = useDiscountStore();

    const { setExtra, setCoupon } = useDiscountStore();


    return (

        <div className={"p-4 flex flex-col gap-y-6  rounded-lg  border-b-3  dark:text-white"}>
            <div className={"flex justify-between items-center"}>
                <span>Sub: </span>
                <span>{getTotal()} $</span>
            </div>

            <div className={"flex justify-between items-center"}>
                <span>Extra discount: </span>
                <Discount handler={setExtra} />
            </div>

            <div className={"flex justify-between items-center"}>
                <span>Coupon discount: </span>
                <Discount handler={setCoupon} />
            </div>
            <div className="w-full h-[1px] border border-tertiary border-dashed">
                <span ></span>
            </div>
            <div className={"flex justify-between items-center font-bold"}>
                <span>Total: </span>
                <span>{getTotal() - amount.extra - amount.coupon} $</span>
            </div>
            <CartSummaryControl />
        </div>

    );
}