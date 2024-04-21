import {ColumnDef} from "@tanstack/react-table";
import {TInvoice, TProductCategory} from "@/type/type.ts";
import {useCategories} from "@/services/api/query.ts";

const columns: ColumnDef<TProductCategory>[] = [];
export default function CategoryListV2() {
    const {data} = useCategories();


    return (
        <h1>Category list</h1>
    );
}