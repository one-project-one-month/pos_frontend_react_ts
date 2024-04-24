import {useDeleteQuery} from "@/hook/management/useDeleteQuery.ts";
import {useNavigate} from "react-router-dom";
import {toast} from "@/components/ui/use-toast.ts";
import DropdownComponent from "@/components/ui/dropdown-component.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ColumnDef} from "@tanstack/react-table";
import {TProductCategory} from "@/type/type.ts";

const CellComponent = ({ row }: { row: {original: TProductCategory} }) => {
    const category = row.original;
    const { mutate } = useDeleteQuery("product-categories")
    const navigator = useNavigate()

    const handleDelete = (id: string) => {
        mutate({ url: "product-categories", id })
        toast({ description: "Successfully Deleted" })
    }

    return (
        <DropdownComponent>
            <Button
                className="w-full
                 mb-2" variant={"outline"}
                onClick={() => handleDelete(category.id)}
            >
                Delete
            </Button>
            <Button
                className="w-full"
                variant={"outline"}
                onClick={() => navigator(`edit/${category.productCategoryId}`)}>
                Edit</Button>
        </DropdownComponent>
    )
}

export const categoryColumns: ColumnDef<TProductCategory>[] = [
    {
        accessorKey: "productCategoryCode",
        header: "Product Category Code"
    },
    {
        accessorKey: "productCategoryName",
        header: "Product Category Name"
    },
    {
        id: "actions",
        cell: CellComponent
    }
]
