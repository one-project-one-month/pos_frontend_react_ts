import axios from "axios";
import {TJSONServerPaginationResponse, TProduct, TProductCategory} from "@/type/type.ts";
import {capitalize} from "@/lib/utils.ts";


const BASE_URL = "http://localhost:3000";

export const getProducts = async () => {
    const response = await axios.get<TProduct[]>(`${BASE_URL}/products`);
    return response.data;
};

export const getProductsByPage = async (page: number) => {
    const response = (await axios.get<TJSONServerPaginationResponse<TProduct[]>>(`${BASE_URL}/products?_page=${page}&_per_page=5`));
    return response.data;
};

export const getProductCategories = async () => {
    const response = await axios.get<TProductCategory[]>(`${BASE_URL}/product-Categories`);
    return response.data;
};

export const getProductByName = async (searchParam: string) => {
    const response = await  axios.get<TProduct[]>(`${BASE_URL}/products?productName=${capitalize(searchParam)}`)
    return response.data
}