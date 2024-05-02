import { useDeleteQuery } from "@/hook/management/useDeleteQuery.ts";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast.ts";
import DropdownComponent from "@/components/ui/dropdown-component.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ColumnDef } from "@tanstack/react-table";
import { TProduct } from "@/type/type.ts";
import { useCartStore } from "@/store/cartStore.ts";
import { Plus, ShoppingCart } from "lucide-react";

const ActionsCellComponent = ({ row }: { row: { original: TProduct } }) => {
    const product = row.original;
    const { mutateAsync } = useDeleteQuery("products");
    const navigator = useNavigate();


    const handleDelete = async (id: string) => {
        await mutateAsync({ url: "products", id });
        toast({ description: "✅ Successfully Deleted" });
    };



    return (
        <DropdownComponent>

            <Button
                className="w-full dark:hover:bg-gray-600  mb-2"
                variant={"outline"}
                onClick={() => navigator(`edit/${product.productId}`)}>
                Edit</Button>
            <Button
                className="w-full
                 dark:hover:bg-gray-600" variant={"outline"}
                onClick={() => handleDelete(product.productId)}
            >
                Delete
            </Button>
        </DropdownComponent>
    );
};

const AtToCartCellComponent = ({ row }: { row: { original: TProduct } }) => {
    const product = row.original;
    const { addToCart } = useCartStore();
    const handleAddToCart = () => {
        addToCart(product, 1)
    }

    return (
        <Button
            className="px-3 mb-2 dark:hover:bg-gray-600 relative dark:bg-transparent"
            variant={"outline"}
            onClick={handleAddToCart}>
            <span className="absolute top-0 right-0 "><Plus size={14} /></span>
            <ShoppingCart />
        </Button>
    )

}



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
        header: "Add",
        cell: AtToCartCellComponent
    },
    {
        header: "Actions",
        cell: ActionsCellComponent
    },

];
