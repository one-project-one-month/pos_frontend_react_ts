import {useSearchParams} from "react-router-dom";

export const useSearchString = (param: string) => {
    const [searchParams] = useSearchParams();

    const searchString = searchParams.get(param) as string;

    return {searchString};
}