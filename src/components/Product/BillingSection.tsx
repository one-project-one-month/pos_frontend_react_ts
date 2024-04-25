import Cart from "@/components/Product/Cart/Cart.tsx";
import StaffSelection from "@/components/Product/StaffSelection.tsx";

export default function BillingSection() {

    return (
        <div className={"p-6 bg-blue-50 rounded"}>

            <div className={"flex justify-between items-center"}>
                <h2 className={"text-cyan-900 font-bold text-xl"}>Staff</h2>
                <div><StaffSelection/></div>
            </div>
            <Cart/>
        </div>
    )
}