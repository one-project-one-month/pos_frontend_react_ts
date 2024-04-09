import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {produce} from "immer";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));


export const capitalize = (input: string) => produce([...input], (input) => {input[0] = input[0].toUpperCase()}).join("");