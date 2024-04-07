import axios from "axios";
import {TProduct} from "@/type/type.ts";
import { TInvoice } from "@/type/type.ts";

const BASE_URL = "http://localhost:3000";

export const getProducts = async () => {
    const response = await axios.get<TProduct[]>(`${BASE_URL}/products`);
    return response.data;
};

export const getInvoices = async () => {
    const response = await axios.get<TInvoice[]>(`${BASE_URL}/saleInvoice`);
    return response.data;
}