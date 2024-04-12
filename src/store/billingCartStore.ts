import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {TProduct, TProductInCart} from "@/type/type.ts";


type BillingCartStoreState = {
    cart: TProductInCart[],
}

type BillCartStoreActions = {
    addToCart: (product: TProduct, count: number) => void,
    increaseItemCount: (productCode: TProduct["productCode"]) => void
    reduceItemCount: (productCode: TProduct["productCode"]) => void,
    removeItemFromCart: (productCode: TProduct["productCode"]) => void
    clearCart: () => void
}

type TBillingCartStore = BillingCartStoreState & BillCartStoreActions
export const useBillingCartStore = create<TBillingCartStore>()(
    immer((set) => ({
        cart: [],
        addToCart: (product, count) => (set(state => {
            const itemsInCart = state.cart.map(item => item.product.productCode);
            if (itemsInCart.length === 0 || !itemsInCart.includes(product.productCode)) {
                state.cart.push({product, count});
            } else if(itemsInCart.includes(product.productCode)) {
                state.cart.map(item => {
                    if(item.product.productCode === product.productCode){
                        item.count += 1;
                    }
                })
            }
        })),
        increaseItemCount: (productCode) => (set(state=> {
            state.cart.map(item => {if(item.product.productCode === productCode) {item.count += 1}})
        })) ,
        reduceItemCount: (productCode) => (set(state => {
            state.cart.map(item => {if(item.product.productCode === productCode) {item.count -= 1}})
            state.cart = state.cart.filter(item => item.count !== 0)
        })),
        removeItemFromCart: (productCode) => (set(state  => {
            state.cart = state.cart.filter(item => item.product.productCode !== productCode)
        })),
        clearCart: () => (set(state => {
            state.cart = [];
        }))
    }))
);