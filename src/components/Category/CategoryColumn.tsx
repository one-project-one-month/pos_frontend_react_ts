import { useDeleteQuery } from "@/hook/management/useDeleteQuery.ts";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast.ts";
import { Button } from "@/components/ui/button.tsx";
import { ColumnDef } from "@tanstack/react-table";
import { TProductCategory } from "@/type/type.ts";

const CellComponent = ({ row }: { row: { original: TProductCategory } }) => {
    const category = row.original;
    const { mutate } = useDeleteQuery("product-categories");
    const navigator = useNavigate();

    const handleDelete = (id: string) => {
        mutate({ url: "product-categories", id });
        toast({ description: "✅ Successfully Deleted" });
    };

    return (
        <div className={"flex justify-center items-center  gap-x-4 "}>
            <Button
                className="w-20 font-bold bg-zinc-700"
                variant={"default"}
                onClick={() => navigator(`edit/${category.productCategoryId}`)}
            >
                Edit
            </Button>
            <Button
                className="w-20 font-bold" variant={"destructive"}
                onClick={() => handleDelete(category.productCategoryId)}
            >
                Delete
            </Button>
        </div>
    );
};

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
];
