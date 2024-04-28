import { useCartStore } from "@/store/cartStore.ts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import { TProductInCart } from "@/type/type.ts";
import QtyEditor from "@/components/Product/Cart/QtyEditor.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Trash } from "lucide-react";

export default function CartTable() {
    const { products } = useCartStore()

    return (
        <Table className={"mt-4 mb-8"}>
            <TableHeader>
                <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Qty</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Delete</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map(item => <CartDataRow data={item} key={item.product.productId} />)}
            </TableBody>
        </Table>
    )
}

function CartDataRow({ data }: { data: TProductInCart }) {

    return (
        <TableRow>
            <TableCell>{data.product.productName}</TableCell>
            <TableCell>
                <QtyEditor value={data.quantity} productCode={data.product.productCode} />
            </TableCell>
            <TableCell>{data.product.price}</TableCell>
            <TableCell className={"center"}>
                <DeleteBtn productCode={data.product.productCode} />
            </TableCell>
        </TableRow>
    )
}

function DeleteBtn({ productCode }: { productCode: string }) {
    const { removeItemFromCart } = useCartStore()

    const deleteBtnHandler = () => {
        removeItemFromCart(productCode)
    }

    return (
        <Button
            variant="destructive"
            onClick={deleteBtnHandler}
            className="rounded-3xl px-3"
        >
            <Trash size={18} />
        </Button>
    )
}