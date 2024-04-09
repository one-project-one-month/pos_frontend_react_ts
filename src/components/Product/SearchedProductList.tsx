import {useQuery} from "@tanstack/react-query";
import {getProductByName} from "@/services/productApi.ts";
import ProductListItem from "@/components/Product/ProductListItem.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

type SearchedProductListProps = {
    searchString: string
}
export default function SearchedProductList({searchString}: SearchedProductListProps){
    const searchQuery = useQuery({
        queryKey: ["search", "products", searchString],
        queryFn: async () => getProductByName(searchString),
        staleTime: 1000 * 60 * 60
    });

    const navigate = useNavigate()

    const btnHandler = () => {
        navigate("/products")
    }

    return(
        <>
            <ul className={"max-w-productList p-6 flex flex-col gap-y-5 rounded bg-[#eee]"}>
                {searchQuery.data && searchQuery.data.map(ele => <ProductListItem key={ele.productCode}
                                                                                  productData={ele}/>)}
            </ul>
            <Button className={"mt-4"} onClick={btnHandler}>See all products</Button>
        </>
    )
}