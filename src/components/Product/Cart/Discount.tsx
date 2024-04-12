import DiscountEditor from "@/components/Product/Cart/DiscountEditor.tsx";

import DiscountEditStateProvider from "@/provider/DiscountEditStateProvider.tsx";

export default function Discount({handler}: {handler: (input: number) => void}) {
    return (
        <DiscountEditStateProvider>
            <DiscountEditor handler={handler}/>
        </DiscountEditStateProvider>
    );
}

