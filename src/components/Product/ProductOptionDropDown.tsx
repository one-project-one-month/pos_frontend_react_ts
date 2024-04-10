import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";

export default function ProductOptionDropDown() {
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
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        Add to cart
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenuPortal>
        </DropdownMenu>
    );
}