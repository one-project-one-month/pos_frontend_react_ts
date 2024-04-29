import StaffSelection from "@/components/Product/StaffSelection.tsx";
import { useCartStore } from "@/store/cartStore.ts";
import CartEmpty from "@/components/Product/Cart/CartEmpty.tsx";
import CartList from "@/components/Product/Cart/CartList.tsx";
import { cn } from "@/lib/utils.ts";

export default function BillingSection() {

    const { products } = useCartStore();

    return (
        <div className={cn("w-[50%] ml-8 p-6 bg-blue-50 dark:bg-gray-900 shadow-3xl rounded h-fit", products.length === 0 && "py-10 mt-[20vh] bg-transparent dark:bg-transparent")}>
            {products.length !== 0 ? <div className={" w-full flex justify-between items-center"}>
                <h2 className={"text-tertiary dark:text-dark-tertiary font-bold text-xl"}>Staff</h2>
                <StaffSelection />
            </div> : <CartEmpty />}
            {products.length !== 0 && <CartList />}
        </div>
    );
}