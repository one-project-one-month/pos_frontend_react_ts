import {useMutation, useQueryClient} from "@tanstack/react-query";
import {TJSONServerPaginationResponse, TProduct, TProductCategory} from "@/type/type.ts";
import {editCategoryById, editProductById} from "@/services/api/productApi.ts";
import {produce} from "immer";

export function useEditProduct(page: number, productId:number) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: TProduct) => {
            return await editProductById(productId, data);
        },
        onSuccess: async (data) => {
            queryClient.setQueryData<TJSONServerPaginationResponse<TProduct[]>>(
                ["products", page],
                (oldProduct) => {
                    if (!oldProduct) return
                    return produce(oldProduct, draft => {
                        draft.data.map(product => {
                            if (product.id === data.id) {
                                product.price = data.price
                                product.productCode = data.productCode
                                product.productCategoryCode = data.productCategoryCode
                                product.productName = data.productName
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

export function useEditCategory(productCategoryId: number) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: TProductCategory) => {
            return await editCategoryById(productCategoryId, data);
        },
        onSuccess: async (data) => {
            queryClient.setQueryData<TProductCategory[]>(
                ["categories"],
                (oldCategories) => {
                    if (!oldCategories) return
                    return produce(oldCategories, draft => {
                        draft.map(category => {
                            if (category.id === data.id) {
                                category.productCategoryCode = data.productCategoryCode
                                category.productCategoryName = data.productCategoryName
                            }
                        })
                    })
                }

            )
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({queryKey: ["categories"]});
        }

    });
}