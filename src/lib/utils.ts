import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {produce} from "immer";
import {useCartStore} from "@/store/cartStore.ts";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));


export const capitalize = (input: string) => produce([...input], (input) => {
    input[0] = input[0].toUpperCase();
}).join("");

export const getTotal = () => useCartStore.getState().products.reduce((total, cartItem) => {
    return total += (cartItem.count * cartItem.product.price);
}, 0);

export const getCart = () => useCartStore.getState().products.map(item => {
    return {
        productCode: item.product.productCode,
        count: item.count
    };
});

