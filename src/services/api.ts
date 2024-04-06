import axios from "axios";
import {TProduct, TProductCategory} from "@/type/type.ts";


const BASE_URL = "http://localhost:3000";

export const getProducts = async () => {
    const response = await axios.get<TProduct[]>(`${BASE_URL}/products`);
    return response.data;
};

export const getProductCategories = async () => {
    const response = await  axios.get<TProductCategory[]>(`${BASE_URL}/product-Categories`)
    return response.data
}