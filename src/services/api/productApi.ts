import {
  TJSONServerPaginationResponse,
  TProduct,
  TProductCategory,
} from "@/type/type.ts";
import { capitalize } from "@/lib/utils.ts";
import apiClient from "./api-client";

export const getProducts = async () => {
  console.log("res")
  const response = await apiClient.get<TProduct[]>(`/products`);
  return response.data;
};

export const getProductsByPage = async (page: number) => {
  const response = await apiClient<TJSONServerPaginationResponse<TProduct[]>>(
      `/products?_page=${page}&_per_page=5`
  );
  return response.data;
};

export const getProductCategories = async () => {
  const response = await apiClient.get<TProductCategory[]>(
      `/product-Categories`
  );
  return response.data;
};

export const getProductByName = async (searchParam: string) => {
  const response = await apiClient.get<TProduct[]>(
      `/products?productName=${capitalize(searchParam)}`
  );
  return response.data;
};