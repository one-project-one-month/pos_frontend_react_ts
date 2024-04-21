import {getProductByCode, getProductCategories} from "./productApi.ts";
import {useQuery} from "@tanstack/react-query";


export const productByCodeQuery = (productCode: string) => ({
    queryKey: ["product", "billing", "productCode"],
    queryFn: async () => getProductByCode(productCode),
});


export const useCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: getProductCategories,
    });
};
