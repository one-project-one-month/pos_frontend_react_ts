import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

type DiscountState = {
    amount: { extra: number, coupon: number };
}
type DiscountAction = {
    setExtra: (amount: number) => void;
    setCoupon: (amount: number) => void;
    setNoDiscount: () => void;
}

type TDisCountStore = DiscountState & DiscountAction

export const useDiscountStore = create<TDisCountStore>()(
    immer(set => ({
        amount: {extra: 0, coupon: 0},
        setExtra: (amount) => set(state => {
            state.amount.extra = amount;
        }),
        setCoupon: (amount) => set(state => {
            state.amount.coupon = amount;
        }),
        setNoDiscount: () => set(state => {
            state.amount.extra = 0;
            state.amount.coupon = 0;
        })
    }))
);