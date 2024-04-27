import { useDeleteQuery } from "@/hook/management/useDeleteQuery.ts";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast.ts";
import DropdownComponent from "@/components/ui/dropdown-component.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ColumnDef } from "@tanstack/react-table";
import { TProduct } from "@/type/type.ts";
import { useCartStore } from "@/store/cartStore.ts";

const CellComponent = ({ row }: { row: { original: TProduct } }) => {
    const product = row.original;
    const { mutate } = useDeleteQuery("products");
    const navigator = useNavigate();
    const { addToCart } = useCartStore();

    const handleDelete = (id: string) => {
        mutate({ url: "products", id });
        toast({ description: "✅ Successfully Deleted" });
    };

    const handleAddToCart = () => {
        addToCart(product, 1)
    }

    return (
        <DropdownComponent>
            <Button
                className="w-full mb-2"
                variant={"outline"}
                onClick={handleAddToCart}>
                Add To Cart</Button>

            <Button
                className="w-full
                 mb-2" variant={"outline"}
                onClick={() => handleDelete(product.productId)}
            >
                Delete
            </Button>
            <Button
                className="w-full"
                variant={"outline"}
                onClick={() => navigator(`edit/${product.productId}`)}>
                Edit</Button>


        </DropdownComponent>
    );
};

export const productColumn: ColumnDef<TProduct>[] = [
    {
        accessorKey: "productCode",
        header: "Product Code"
    },
    {
        accessorKey: "productName",
        header: "Product Name"
    },
    {
        accessorKey: "category",
        header: "Category",
        cell: cellInfo => (<p>{cellInfo.row.original?.category?.productCategoryName ?? ""}</p>)
    },
    {
        accessorKey: "price",
        header: "Price"
    },
    {
        id: "actions",
        cell: CellComponent
    }
];
