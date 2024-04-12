import {ReactNode} from "react";
import {Button} from "@/components/ui/button.tsx";

type QtyBtnProps = {
    handler: () => void
    children: ReactNode
}
export default function QtyBtn({handler, children}: QtyBtnProps){
    return (
        <Button  variant={"ghost"} className={"aspect-square h-8  p-0.5  border border-cyan-800 *:aspect-square *:h-2"}
                onClick={handler}
        >
            {children}
        </Button>
    )

}