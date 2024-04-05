import {useQuery} from "@tanstack/react-query";
import {getProducts} from "@/services/api.ts";

export default function ProductPage(){
    const {data } = useQuery({
        queryKey: ["product"],
        queryFn: getProducts
    })

    return (
        <section>
            {data && data.map(ele => <h1 key={ele.productCode}>{ele.productName}</h1>)}
        </section>
    )
}