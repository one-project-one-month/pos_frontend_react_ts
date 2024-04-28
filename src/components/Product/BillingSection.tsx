import Cart from "@/components/Product/Cart/Cart.tsx";
import StaffSelection from "@/components/Product/StaffSelection.tsx";

export default function BillingSection() {

    return (
        <div className={"ml-8 p-6 bg-blue-50 rounded"}>
            <div className={" w-full flex justify-between items-center"}>
                <h2 className={"text-cyan-900 font-bold text-xl"}>Staff</h2>
                <StaffSelection />
            </div>
            <Cart />
        </div>
    )
}