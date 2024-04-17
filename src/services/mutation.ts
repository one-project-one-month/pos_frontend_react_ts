import {useMutation, useQueryClient} from "@tanstack/react-query";
import {TJSONServerPaginationResponse, TProduct, TProductCategory} from "@/type/type.ts";
import {editCategoryById, editProductById, getProductsByPage, postProduct} from "@/services/api/productApi.ts";
import {produce} from "immer";

export function useEditProduct(page: number, productId: number) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: TProduct) => {
            return await editProductById(productId, data);
        },
        onSuccess: async (data) => {
            queryClient.setQueryData<TJSONServerPaginationResponse<TProduct[]>>(
                ["products", page],
                (oldProduct) => {
                    if (!oldProduct) return;
                    return produce(oldProduct, draft => {
                        draft.data.map(product => {
                            if (product.id === data.id) {
                                product.price = data.price;
                                product.productCode = data.productCode;
                                product.productCategoryCode = data.productCategoryCode;
                                product.productName = data.productName;
                            }
                        });
                    });
                }
            );
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
                    if (!oldCategories) return;
                    return produce(oldCategories, draft => {
                        draft.map(category => {
                            if (category.id === data.id) {
                                category.productCategoryCode = data.productCategoryCode;
                                category.productCategoryName = data.productCategoryName;
                            }
                        });
                    });
                }
            );
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({queryKey: ["categories"]});
        }

    });
}

export const useCreateProduct = (page: number) => {

    const queryClient = useQueryClient();
    const data = queryClient.getQueryData(["products", page]);
    const {items, pages} = data as { items: number, pages: number };
    const isNewPageNeeded = items % pages === 0;


    return useMutation({
        mutationFn: postProduct,
        onSuccess: async (data) => {

            if (isNewPageNeeded) {
                await queryClient.fetchQuery({
                    queryKey: ["products", pages + 1],
                    queryFn: async () => getProductsByPage(pages + 1)
                });

                queryClient.setQueryData<TJSONServerPaginationResponse<TProduct[]>>(
                    ["products", pages],
                    (oldProducts) => {
                        console.log("we are in upper route  ");
                        if (!oldProducts) return;
                        return produce(oldProducts, productDraft => {
                            productDraft.items += 1;
                            productDraft.last += 1;
                            productDraft.next = pages + 1;
                            productDraft.pages += 1;
                        });
                    }
                );
            } else {
                queryClient.setQueryData<TJSONServerPaginationResponse<TProduct[]>>(
                    ["products", pages],
                    (oldProducts) => {
                        console.log("we are in lower route  ");
                        if (!oldProducts) return;
                        return produce(oldProducts, productDraft => {
                            productDraft.items += 1;
                            //@ts-expect-error I don't have any workaround for this
                            productDraft.data.push(data);
                        });
                    }
                );
            }
        },
        onSettled: async () => {
            if (isNewPageNeeded) {
                return await queryClient.invalidateQueries({queryKey: ["products", pages - 1]});
            } else {
                return await queryClient.invalidateQueries({queryKey: ["products", pages]});

            }
        }
    });
};