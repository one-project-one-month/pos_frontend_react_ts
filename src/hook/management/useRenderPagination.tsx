import {Pagination, PaginationContent, PaginationItem} from "@/components/ui/pagination.tsx";
import {Button} from "@/components/ui/button.tsx";


import {cn} from "@/lib/utils.ts";
import {useSearchParams} from "react-router-dom";

type ProductListPaginationProps =
    {
        next: number | undefined | null;
        prev: number | undefined | null;
        page: number;
    }
const useRenderPagination = ({next, prev, page}: ProductListPaginationProps) => {

    const [, setSearchParams] = useSearchParams();

    const nextBtnHandler = () => {
        if (next) {
            //@ts-expect-error I don't have trick to type this shit
            setSearchParams({page: next});
        }
    };

    const prevBtnHandler = () => {
        if (prev) {
            //@ts-expect-error I don't have trick to type this shit
            setSearchParams({page: prev});
        }
    };

    return (
        <Pagination className={cn(" mt-4 ml-0")}>
            <PaginationContent>
                <PaginationItem>
                    <Button onClick={prevBtnHandler} disabled={!prev}>Previous</Button>
                </PaginationItem>
                <PaginationItem>
                    <Button>{page}</Button>
                </PaginationItem>
                <PaginationItem>
                    <Button onClick={nextBtnHandler} disabled={!next}>Next</Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default useRenderPagination;