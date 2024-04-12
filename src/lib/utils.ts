import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {produce} from "immer";
import {useBillingCartStore} from "@/store/billingCartStore.ts";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));


export const capitalize = (input: string) => produce([...input], (input) => {input[0] = input[0].toUpperCase()}).join("");

export const getTotal = () => useBillingCartStore.getState().cart.reduce((total, cartItem) => {
    return total += (cartItem.count * cartItem.product.price)
}, 0 )