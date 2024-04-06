import {Pagination, PaginationContent, PaginationItem} from "@/components/ui/pagination.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Dispatch, SetStateAction} from "react";

type ProductListPaginationProps =
    {
        handler: Dispatch<SetStateAction<number>>;
        next: number | null | undefined;
        prev: number | null | undefined;
    }

export default function ProductListPagination({handler, next, prev}:ProductListPaginationProps) {
    const nextBtnHandler = () => {
        console.log("next", next);
        if (next) {
            handler(next);
        }
    };

    const prevBtnHandler = () => {
        console.log("prev", prev);
        if (prev) {
            handler(prev);
        }
    };

    return (
        <Pagination className={"max-w-[600px] mt-4 ml-0"}>
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