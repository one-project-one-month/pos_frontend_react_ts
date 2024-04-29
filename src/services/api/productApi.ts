import { TProduct, TProductCategory } from "@/type/type.ts";
import { capitalize } from "@/lib/utils.ts";
import apiClient from "./api-client";

export const getProductCategories = async () => {
  const { data } = await apiClient.get(`/product-categories`);
  const res = data.data as { categories: TProductCategory[] };
  return res.categories;
};

export const getProducts = async () => {
  const { data } = await apiClient.get(`/products`);
  const res = data.data as { products: TProduct[] };
  return res.products;
};

export const getProductByCode = async (productCode: string) => {
  const response = await apiClient.get<TProduct[]>(
    `/products?productCode=${capitalize(productCode)}`
  );
  return response.data;
};
