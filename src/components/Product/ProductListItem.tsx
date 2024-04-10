import {TProduct, TProductCategory} from "@/type/type.ts";
import {useQueryClient} from "@tanstack/react-query";
import {Badge} from "@/components/ui/badge.tsx";
import ProductOptionDropDown from "@/components/Product/ProductOptionDropDown.tsx";

export default function ProductListItem({productData}: { productData: TProduct }) {

    const queryClient = useQueryClient();
    const data = queryClient.getQueryData<TProductCategory[]>(["categories"]);
    const currentCategory = data && data.filter(item => item.productCategoryCode === productData.productCategoryCode)[0];


    return (
        <li className={"flex justify-between items-center bg-teal-50 py-4 px-8 rounded"}>
            <div className={"flex flex-col gap-y-4"}>
                <span className={"pl-2"}>{productData.productName}</span>
                {currentCategory && <Badge>{currentCategory.productCategoryName}</Badge>}
            </div>
            <div className={"flex items-center gap-x-10"}>
                <span>
                    ${productData.price}
                </span>
                <ProductOptionDropDown/>
            </div>
        </li>
    );
}