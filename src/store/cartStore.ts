import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {TProduct, TProductInCart, TStaff} from "@/type/type.ts";


type BillingCartStoreState = {
    products: TProductInCart[],
    staffCode: TStaff["staffCode"] | null
}

type BillCartStoreActions = {
    addToCart: (product: TProduct, count: number) => void,
    increaseItemCount: (productCode: TProduct["productCode"]) => void;
    reduceItemCount: (productCode: TProduct["productCode"]) => void;
    removeItemFromCart: (productCode: TProduct["productCode"]) => void;
    addStaff: (staffCode: TStaff["staffCode"]) => void;
    clearCart: () => void;
}

type TBillingCartStore = BillingCartStoreState & BillCartStoreActions
export const useCartStore = create<TBillingCartStore>()(
    immer((set) => ({
        products: [],
        staffCode: null,
        addToCart: (product, count) => (set(state => {
            const itemsInCart = state.products.map(item => item.product.productCode);
            if (itemsInCart.length === 0 || !itemsInCart.includes(product.productCode)) {
                state.products.push({product, count});
            } else if (itemsInCart.includes(product.productCode)) {
                state.products.map(item => {
                    if (item.product === product) {
                        item.count += 1;
                    }
                });
            }
        })),
        increaseItemCount: (productCode) => (set(state => {
            state.products.map(item => {
                if (item.product.productCode === productCode) {
                    item.count += 1;
                }
            });
        })),
        reduceItemCount: (productCode) => (set(state => {
            state.products.map(item => {
                if (item.product.productCode === productCode) {
                    item.count -= 1;
                }
            });
            state.products = state.products.filter(item => item.count !== 0);
        })),
        removeItemFromCart: (productCode) => (set(state => {
            state.products = state.products.filter(item => item.product.productCode !== productCode);
        })),
        clearCart: () => (set(state => {
            state.products = [];
        })),
        addStaff: (staffCode) => (set(state => {
            state.staffCode = staffCode;
        }))
    }))
);