import {Pagination, PaginationContent, PaginationItem} from "@/components/ui/pagination.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Dispatch, SetStateAction} from "react";

import {cn} from "@/lib/utils.ts";

type ProductListPaginationProps =
    {
        handler: Dispatch<SetStateAction<number>>;
        next: number | null;
        prev: number | null;
        hidden?: boolean;
    }

export default function ProductListPagination({handler, next, prev,hidden}:ProductListPaginationProps) {
    const nextBtnHandler = () => {
        if (next) {
            handler(next);
        }
    };

    const prevBtnHandler = () => {
        if (prev) {
            handler(prev);
        }
    };

    return (
        <Pagination className={cn("max-w-[600px] mt-4 ml-0", hidden && "hidden")}>
            <PaginationContent>
                <PaginationItem>
                    <Button onClick={prevBtnHandler} disabled={!prev}>Previous</Button>
                </PaginationItem>
                <PaginationItem>
                    <Button onClick={nextBtnHandler} disabled={!next}>Next</Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}