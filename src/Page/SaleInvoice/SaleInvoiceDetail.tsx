import { useLocation } from "react-router-dom"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { TProduct } from "@/type/type";
import { useReactToPrint } from 'react-to-print'
import { useRef } from "react";
import { useCartStore } from "@/store/cartStore.ts";

const SaleInvoiceDetails = () => {
    const location = useLocation();
    const componentRef = useRef<HTMLDivElement | null>(null);
    const {detail} = location.state; 
    const productList = useCartStore((state) => state.products);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })

    return (
        <div className="w-[30%] mx-auto my-10">
            <div className="border border-gray-200 py-3 px-5" ref={componentRef}>
                <div className="flex items-center flex-col gap-2 mb-3">
                    <h1>POS</h1>
                    <p>Open from 8AM - 10PM</p>
                </div>
                <p>Phone: 09-97234565434</p>
                <p>Casher: {detail.customerCode}</p>
                <p>{detail.saleInvoiceDateTime}</p>
                <Table className="mt-5">
                <TableHeader>
                    <TableRow>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Total(ks)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        productList?.map(({product,count}: {product: TProduct,count: number} )=>  (
                                <TableRow>
                                    <TableCell>{product?.productName}</TableCell>
                                    <TableCell>{count}</TableCell>
                                    <TableCell>{product?.price}</TableCell>
                                    <TableCell>{product?.price * count}</TableCell>
                                </TableRow>
                            )
                        )
                    }
                </TableBody>
                </Table>
                <div className="w-full h-[1px] bg-gray-300" />
                <div className="flex justify-around">
                    <p className="pt-4 pb-0">Total Qty {productList?.length}</p>
                    <div>
                        <p className="pt-4 pb-0 flex justify-between">
                            Sub Total: 
                            <span className="pl-4 pr-2">{detail.totalAmount}</span>
                        </p>
                        <p className="py-0 flex justify-between">
                            Discount:  
                            <span className="pl-4 pr-2">{detail.discount}</span>
                        </p>
                        <p className="py-0 flex justify-between">
                            Tax: 
                            <span className="pl-4 pr-2">{detail.tax}</span>
                        </p>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300" />
                <div className="flex justify-between my-3 px-14">
                    <p>Paid By: Cash(ks)</p>
                    <p>{detail.paymentAmount}</p>
                </div>
                <div className="w-full h-[1px] bg-gray-300" />
                <div className="flex justify-between my-3 px-14">
                    <p>Changed:</p>
                    <p>{detail.change}</p>
                </div>
            </div>
            <div className="text-center mt-4">
                <button className="bg-gray-900 text-white inline-block py-2 px-8 rounded-md" onClick={handlePrint}>Print</button>                
            </div>
        </div>
    )
}

export default SaleInvoiceDetails