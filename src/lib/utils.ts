import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {produce} from "immer";
import {useCartStore} from "@/store/cartStore.ts";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));


export const capitalize = (input: string) => produce([...input], (input) => {
    input[0] = input[0].toUpperCase();
}).join("");

export const getTotal = () => useCartStore.getState().products.reduce((total, cartItem) => {
    return total += (cartItem.quantity * cartItem.product.price);
}, 0);

export const getCart = () => useCartStore.getState().products.map(item => {
    return {
        productCode: item.product.productCode,
        quantity: item.quantity
    };
});

export const formattedDateTime = (dateTime: any) => {
 const date = new Date(dateTime);
 return new Intl.DateTimeFormat("en-US", {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
}).format(date);   
}

export const apiFormattedDate = (dateTime: any) => {
    const date = new Date(dateTime);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
   }).format(date);   

   const [month,day,year] = formattedDate.split('/');
   const formattedDateString = `${year}-${month}-${day}`

   return formattedDateString
   }