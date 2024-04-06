import {getProducts} from "@/services/api.ts";

export const productQuery = () => ({
    queryKey: ["products"],
    queryFn: getProducts,
})