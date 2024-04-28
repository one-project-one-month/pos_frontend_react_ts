import { useDiscountInputState } from "@/provider/DiscountEditStateProvider.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Check, Pencil } from "lucide-react";



export default function DiscountEditor({ handler }: { handler: (input: number) => void }) {

    const { isEdit, setIsEdit } = useDiscountInputState();
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
        <div className={"flex items-center "}>
            <DiscountEditorBtn handler={btnHandler} />
            <div>
                {isEdit ? <>
                    <label className={"sr-only"} htmlFor={"discount"}>Enter the discount amount</label>
                    <Input type={"number"} min={-1} className={"w-[90px]"} id={"discount"} value={discountAmount}
                        onInput={inputHandler} />
                </> : <p>{discountAmount}</p>}
            </div>
        </div>
    );
}


function DiscountEditorBtn({ handler }: { handler: () => void }) {
    const { isEdit } = useDiscountInputState();

    return (
        <Button variant={"ghost"} onClick={handler}>
            {!isEdit ? <Pencil size={20} /> :
                <Check size={20} />}
        </Button>
    );
}

