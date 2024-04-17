import {getProductByCode, getProductCategories, getProductsByPage} from "./productApi.ts";
import {useQuery} from "@tanstack/react-query";


export const productByCodeQuery = (productCode: string) => ({
    queryKey: ["product", "billing", "productCode"],
    queryFn: async () => getProductByCode(productCode),
});

export const useProductByPage = (page: number) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: async () => getProductsByPage(page),
    staleTime: 1000 * 60 * 60,
  })
}

export const useProductCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getProductCategories,
  })
}
