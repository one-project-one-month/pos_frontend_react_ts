// import {QueryClient, QueryFilters} from "@tanstack/react-query";
//
// import {redirect} from "react-router-dom";
// import {productByPageQuery, productQuery} from "@/services/api/query.ts";
//
//
// export const productsLoader = (queryClient: QueryClient) => async () => {
//     const query = productQuery();
//     return (
//         queryClient.getQueriesData(query.queryKey as QueryFilters) ?? (await queryClient.fetchQuery(query))
//     );
// };
//
//
//
// export const productsByPageLoader = (queryClient: QueryClient) => async  () => {
//     const query = productByPageQuery();
//     return (
//         queryClient.getQueriesData(query.queryKey as QueryFilters) ?? (await queryClient.fetchQuery(query))
//     )
// }
//
// export const productRouteProtector = () => {
//     return redirect("/products/1")
// }