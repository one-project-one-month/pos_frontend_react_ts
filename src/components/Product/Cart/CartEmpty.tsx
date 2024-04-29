import { ShoppingCart } from "lucide-react";

export default function CartEmpty() {
    return (
        <div className={"p-8   flex flex-col justify-center items-center gap-y-8 rounded-2xl  "}>
            <div>
                <ShoppingCart size={100} className="dark:text-dark-tertiary" />
            </div>
            <p className={"text-xl font-bold dark:text-dark-tertiary"}>Your cart is empty</p>
        </div>
    )
}