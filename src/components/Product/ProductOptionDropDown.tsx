import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useBillingCartStore} from "@/store/billingCartStore.ts";
import {TProduct} from "@/type/type.ts";
import {Link} from "react-router-dom";
import {useCurrentPage} from "@/hook/useCurrentPage.ts";

type ProductOptionDropDownProp = {
    product: TProduct
}

export default function ProductOptionDropDown({product}: ProductOptionDropDownProp) {

    const {page} = useCurrentPage();

    const {addToCart} = useBillingCartStore();

    const addToCartBtnHandler = () => {
        addToCart(product, 1);
    };

    const deleteProductBtnHandler = () => {
        console.log("delete");
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 128 512"
                     className={"aspect-square h-10 p-2 "}
                >
                    <path
                        d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                </svg>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
                <DropdownMenuContent sideOffset={5}>
                    <DropdownMenuItem>
                        <Button className={"w-full"} variant={"outline"} onClick={addToCartBtnHandler}>
                            Add to cart
                        </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Button className={"w-full h-full px-0 py-0"} variant={"outline"}>
                            <Link to={"edit"} state={{product, page}} className={"w-full py-2 "}>Edit</Link>
                        </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Button className={"w-full"} variant={"outline"}
                                onClick={deleteProductBtnHandler}>Delete</Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenuPortal>
        </DropdownMenu>
    );
}