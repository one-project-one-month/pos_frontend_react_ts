import { useQuery } from "@tanstack/react-query";
import { getProductCategories } from "@/services/api/productApi";
import { TProductCategory } from "@/type/type.ts";
import { useProductCategoryFilterState } from "@/store/productCategoryFilerState.ts";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { cn } from "@/lib/utils.ts";

export default function ProductCategoryFilter() {
    const { data } = useQuery({
        queryKey: ["categories"],
        queryFn: getProductCategories
    });

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className={"outline-none"}>
                    <Badge className={"py-2 px-6 rounded bg-green-500 font-bold text-md"}
                        aria-label={"Choose Categories"}>
                        <span>Categories</span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            className={"aspect-square h-6 ml-2 fill-white"}

                        >
                            <path
                                d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                        </svg>
                    </Badge>
                </DropdownMenuTrigger>
                <DropdownMenuPortal>
                    <DropdownMenuContent>
                        <ProductCategoryAll />
                        {data && data.map(item => <ProductCategoryFilterItem data={item}
                            key={item.productCategoryCode} />)}
                    </DropdownMenuContent>
                </DropdownMenuPortal>
            </DropdownMenu>
        </div>
    );
}

function ProductCategoryFilterItem({ data }: { data: TProductCategory }) {
    const { currCategory, addCategory } = useProductCategoryFilterState();



    const onFilter = () => {
        addCategory(data.productCategoryCode);
    };

    return (
        <DropdownMenuItem >
            <div aria-label={`Toggle ${data.productCategoryName}`}
                role={"button"}
                className={"w-full flex p-3 item-center justify-between bg-teal-200 data-[state=on]:bg-emerald-400"}

                onClick={onFilter}
            >
                <span>{data.productCategoryName}</span>
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className={cn("aspect-square h-5", currCategory.includes(data.productCategoryCode) ? "block" : "hidden")}
                >
                    <path
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
            </div>
        </DropdownMenuItem>
    );
}

function ProductCategoryAll() {
    const { emptyCategory } = useProductCategoryFilterState();

    const onFilter = () => {
        emptyCategory();
    };

    return (
        <DropdownMenuItem onClick={onFilter}>
            <div aria-label={`Un-toggle all category`}
                role={"button"}
                className={"w-full flex p-3 item-center justify-between  bg-teal-200 data-[state=on]:bg-emerald-400"}

            >
                <span>All</span>
            </div>
        </DropdownMenuItem>
    );
}