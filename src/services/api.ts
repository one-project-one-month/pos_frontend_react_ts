import axios from "axios";
import {TProduct} from "@/type/type.ts";


const BASE_URL = "http://localhost:3000";

export const getProducts = async () => {
    const response = await axios.get<TProduct[]>(`${BASE_URL}/products`);
    return response.data;
};