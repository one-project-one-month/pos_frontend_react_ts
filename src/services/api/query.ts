import {getProductByCode, getProducts, getProductsByPage} from "./productApi.ts";

export const productQuery = () => ({
  queryKey: ["products"],
  queryFn: getProducts,
});

export const productByPageQuery = (page = 1) => ({
  queryKey: ["products", page],
  queryFn: async () => getProductsByPage(page),
  keepPreviousData: true,
  staleTime: 1000 * 60 * 60,
  refetchOnWindowFocus: true
});

export const productByCodeQuery = (productCode: string) => ({
  queryKey: ["product", "billing", "productCode"],
  queryFn: async () => getProductByCode(productCode),
})