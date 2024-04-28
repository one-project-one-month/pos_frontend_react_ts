import QtyBtn from "@/components/Product/Cart/QtyBtn.tsx";
import { useCartStore } from "@/store/cartStore.ts";
import { Minus, Plus } from "lucide-react";

export default function QtyEditor({ value, productCode }: { value: number, productCode: string }) {

    const { increaseItemCount, reduceItemCount } = useCartStore();
    const increaseBtnHandler = () => {
        increaseItemCount(productCode)
    }

    const reduceBtnHandler = () => {
        reduceItemCount(productCode)
    }


    return (
        <div className={"w-fit flex items-center "}>
            <QtyBtn handler={increaseBtnHandler}>
                <Plus size={16} />
            </QtyBtn>
            <span className={"block aspect-square p-3"}>{value}</span>
            <QtyBtn handler={reduceBtnHandler}>
                <Minus size={16} />
            </QtyBtn>
        </div>
    );
}



