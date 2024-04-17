import {useSearchParams} from "react-router-dom";

export const useCurrentPage = () => {
    const [searchParams] = useSearchParams()
    const currentPage = searchParams.get("page") ?? 1;
    return {page: +currentPage}
}