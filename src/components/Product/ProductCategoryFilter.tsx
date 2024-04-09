import { useQuery } from "@tanstack/react-query";
import { getProductCategories } from "@/services/productApi";
import { Toggle } from "@/components/ui/toggle.tsx";
import { TProductCategory } from "@/type/type.ts";
import { useProductCategoryFilterState } from "@/store/productCategoryFilerState.ts";
import { createRef } from "react";

export default function ProductCategoryFilter() {
    const { data } = useQuery({
        queryKey: ["categories"],
        queryFn: getProductCategories
    });

    return (
        <div className={"mt-4"}>
            <ul className={"flex py-4  gap-x-6"}>
                {data && data.map(item => <ProductCategoryFilterItem data={item} key={item.productCategoryCode} />)}
            </ul>
        </div>
    );
}

function ProductCategoryFilterItem({ data }: { data: TProductCategory }) {
    const { addCategory, removeCategory } = useProductCategoryFilterState();

    const toggleRef = createRef<HTMLButtonElement>();

    const onFilter = () => {
        const isOpen = toggleRef.current?.getAttribute("data-state") === "off"
        if (isOpen) {
            addCategory(data.productCategoryCode)
        } else {
            removeCategory(data.productCategoryCode)
        }
    };

    return (
        <li onClick={onFilter}>
            <Toggle aria-label={`Toggle ${data.productCategoryName}`}
                className={"bg-teal-200  data-[state=on]:bg-emerald-400"}
                ref={toggleRef}
            >
                {data.productCategoryName}
            </Toggle>
        </li>
    );
}