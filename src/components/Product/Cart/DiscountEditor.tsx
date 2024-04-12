import {useDiscountInputState} from "@/provider/DiscountEditStateProvider.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ChangeEvent, useState} from "react";
import {Input} from "@/components/ui/input.tsx";



export default function DiscountEditor({handler}: { handler: (input: number) => void }) {

    const {isEdit, setIsEdit} = useDiscountInputState();
    const [discountAmount, setDiscountAmount] = useState(0);


    const btnHandler = () => {
        setIsEdit(prevState => !prevState);
        if (isEdit) {
            handler(discountAmount);
        }
    };

    const inputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setDiscountAmount(+evt.target.value);
    };

    return (
        <div className={"flex items-center gap-x-4"}>
            <DiscountEditorBtn handler={btnHandler}/>
            <div>
                {isEdit ? <>
                    <label className={"sr-only"} htmlFor={"discount"}>Enter the discount amount</label>
                    <Input type={"number"} min={-1} className={"w-[90px]"} id={"discount"} value={discountAmount}
                           onInput={inputHandler}/>
                </> : <p>{discountAmount}</p>}
            </div>
        </div>
    );
}


function DiscountEditorBtn({handler}: { handler: () => void }) {
    const {isEdit} = useDiscountInputState();

    return (
        <Button variant={"ghost"} onClick={handler} className={"*:aspect-square *:h-4"}>
            {!isEdit ? <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                >
                    <path
                        d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                    <path
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg>}
        </Button>
    );
}

