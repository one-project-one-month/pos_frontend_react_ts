import QtyBtn from "@/components/Product/Cart/QtyBtn.tsx";
import {useCartStore} from "@/store/cartStore.ts";

export default function QtyEditor({value, productCode}: { value: number, productCode: string }) {

    const {increaseItemCount, reduceItemCount} = useCartStore();
    const increaseBtnHandler = () => {
        increaseItemCount(productCode)
    }

    const reduceBtnHandler = () => {
        reduceItemCount(productCode)
    }


    return (
        <div className={"w-fit flex items-center "}>
            <QtyBtn handler={increaseBtnHandler}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512" aria-label={"Increase Product Count From Cart"}>
                    <path
                        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
            </QtyBtn>
            <span className={"block aspect-square p-3"}>{value}</span>
            <QtyBtn handler={reduceBtnHandler}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512" aria-label={"Reduce Product Count From Cart"}>
                    <path
                        d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                </svg>
            </QtyBtn>
        </div>
    );
}



