import {useMutation, useQueryClient} from "@tanstack/react-query";
import {TJSONServerPaginationResponse, TProduct} from "@/type/type.ts";
import {editProductById} from "@/services/api/productApi.ts";
import {produce} from "immer";

export function useEditProduct(page: number, productId:number) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: Partial<TProduct>) => {
            return await editProductById(productId, data);
        },
        onSuccess: async (data) => {
            queryClient.setQueryData<TJSONServerPaginationResponse<TProduct[]>>(
                ["products", page],
                (oldProduct) => {
                    if (!oldProduct) return
                    return produce(oldProduct, draft => {
                        draft.data.map(product => {
                            if (product.productCode === data.productCode) {
                                product.price = data.price
                            }
                        })
                    })
                }

            )
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({queryKey: ["page", page]});
        }

    });
}