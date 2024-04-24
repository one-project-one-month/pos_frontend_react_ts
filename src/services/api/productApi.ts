import {
    TJSONServerPaginationResponse,
    TProduct,
    TProductCategory,
} from "@/type/type.ts";
import {capitalize} from "@/lib/utils.ts";
import apiClient from "./api-client";


export const getProductsByPage = async (page: number) => {
    const response = await apiClient<TJSONServerPaginationResponse<TProduct[]>>(
        `/products?_page=${page}&_per_page=5`
    );
    return response.data;
};

export const getProductByName = async (searchParam: string) => {
    const response = await apiClient.get<TProduct[]>(
        `/products?productName=${capitalize(searchParam)}`
    );
    return response.data;
};

export const getProductCategories = async () => {
    const {data} = await apiClient.get(
        `/product-categories`
    );
    const res = data.data as {categories: TProductCategory[]}

    return res.categories;
};

export const getProductByCode = async (productCode: string) => {
    const response = await apiClient.get<TProduct[]>(
        `/products?productCode=${capitalize(productCode)}`
    );
    return response.data;
};

export const editProductById = async (productId: number, payload: Partial<TProduct>) => {
    const response = await apiClient.patch<TProduct>(
        `/products/${productId}`, payload
    );
    return response.data;
};

export const postProduct = async (payload: Partial<TProduct>) => {
    const response = await apiClient.post<Partial<TProduct>>(
        `products`, payload
    );
    return response.data;
};