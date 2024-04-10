import {Table, TableBody, TableCell, TableHead, TableRow} from "@/components/ui/table.tsx";
import {useBillingCartStore} from "@/store/billingCartStore.ts";
import {TProductInCart} from "@/type/type.ts";

export default function CartList() {
    const {cart} = useBillingCartStore()

    return (
        <Table className={"mt-4"}>
            <TableRow>
                <TableHead>Product Id</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Total</TableHead>
            </TableRow>
            <TableBody>
                {cart.map(item => <CartDataRow data={item} key={item.product.productCode}/>)}
            </TableBody>
        </Table>
    )
}

function CartDataRow({data}: {data: TProductInCart}) {

    return (
        <TableRow>
            <TableCell>{data.product.productCode}</TableCell>
            <TableCell>{data.product.productName}</TableCell>
            <TableCell>{data.count}</TableCell>
            <TableCell>{data.count * data.product.price}</TableCell>
        </TableRow>
    )
}