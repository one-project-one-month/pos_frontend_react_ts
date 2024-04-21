import {TProductInCart} from "@/type/type.ts";
import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

type Invoice = {
    cart: TProductInCart[],
    discount: number,
}

type InvoiceStoreState = {
    invoice : Invoice[]
}

type InvoiceStoreAction = {
    addToInvoiceStore: (cart: TProductInCart[], discount:number) => void,
    clearInvoiceStore: () => void;
}

type InvoiceStore = InvoiceStoreState & InvoiceStoreAction;

export const useInvoiceStore = create<InvoiceStore>()(
    immer((set) => ({
        invoice: [],
        addToInvoiceStore: (cart, discount) => (set(state => {state.invoice.push({cart,discount})})),
        clearInvoiceStore: () => (set(state => {
            state.invoice = [];
        }))
    }))
)