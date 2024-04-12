import {Table, TableBody, TableCell, TableHead, TableRow} from "@/components/ui/table.tsx";
import {useBillingCartStore} from "@/store/billingCartStore.ts";
import {TProductInCart} from "@/type/type.ts";
import {Button} from "@/components/ui/button.tsx";
import QtyEditor from "@/components/Product/Cart/QtyEditor.tsx";

export default function CartList() {
    const {cart} = useBillingCartStore()

    return (
        <Table className={"mt-4"}>
            <TableRow>

                <TableHead>Product Name</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Delete</TableHead>
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
            <TableCell>{data.product.productName}</TableCell>
            <TableCell>
                <QtyEditor value={data.count} productCode={data.product.productCode}/>
            </TableCell>
            <TableCell>{data.product.price}</TableCell>
            <TableCell className={"center"}>
                <DeleteBtn productCode={data.product.productCode}/>
            </TableCell>
        </TableRow>
    )
}

function DeleteBtn({productCode}: {productCode: string}) {
    const {removeItemFromCart} = useBillingCartStore()

    const deleteBtnHandler = () => {
        removeItemFromCart(productCode)
    }

    return (
        <Button variant={"outline"} className={"aspect-square h-8  p-0.5 border-red-500"}
                onClick={deleteBtnHandler}
        >
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 448 512"
                className={"aspect-square h-4 fill-red-600"}
            >
                <path
                    d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/>
            </svg>
        </Button>
    )
}