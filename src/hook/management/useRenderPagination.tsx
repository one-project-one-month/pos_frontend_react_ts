import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination.tsx";
import { Button } from "@/components/ui/button.tsx";


import { cn } from "@/lib/utils.ts";
import { useSearchParams } from "react-router-dom";

type ProductListPaginationProps =
    {
        next: number | undefined | null;
        prev: number | undefined | null;
        page: number;
        hidden?: boolean;
    }
const useRenderPagination = ({ next, prev, page, hidden }: ProductListPaginationProps) => {

    const [, setSearchParams] = useSearchParams();

    const nextBtnHandler = () => {
        if (next) {
            setSearchParams(prevState => {
                prevState.set("page", next.toString())
                return prevState
            })
        }
    };

    const prevBtnHandler = () => {
        if (prev) {
            setSearchParams(prevState => {
                prevState.set("page", prev.toString())
                return prevState
            });
        }
    };



    return (
        <Pagination className={cn("max-w-[600px] mt-4", hidden && "hidden")}>
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