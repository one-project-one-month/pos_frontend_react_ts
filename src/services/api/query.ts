import {getProductByCode, getProductCategories, getProductsByPage} from "./productApi.ts";
import {keepPreviousData, useQuery} from "@tanstack/react-query";


export const productByCodeQuery = (productCode: string) => ({
    queryKey: ["product", "billing", "productCode"],
    queryFn: async () => getProductByCode(productCode),
});

export const useProductByPage = (page: number) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: async () => getProductsByPage(page),
    staleTime: 1000 * 60 * 60,
    placeholderData: keepPreviousData,
  })
}

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getProductCategories,
  })
}

export const useCategoriesById = (id: string | number) => {
  return useQuery({
    queryKey: ["categories", id],
  })
}
