import { useLocation, useNavigate } from "react-router-dom"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { ArrowLeft, Printer } from "lucide-react"
import { TInvoiceDetail } from "@/type/type";
import { useReactToPrint } from 'react-to-print'
import { useRef } from "react";
import { formattedDateTime } from "@/lib/utils";

const SaleInvoiceDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const componentRef = useRef<HTMLDivElement | null>(null);
    const {detail} = location.state; 
    const totalQty = detail?.saleInvoiceDetails.reduce((acc:number,curr: any) => acc + curr.quantity,0)
        
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })

    return (
        <>
            <div className="w-[30%] mx-auto my-5">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-cyan-900 font-semibold text-lg cursor-pointer flex items-center" onClick={() => navigate('/sale-invoice')}><ArrowLeft size={20} /> Back</p>                
                    <button className="bg-gray-900 text-white py-1 px-4 rounded-md flex items-center" onClick={handlePrint}><Printer className="mr-2" size={21} /> Print</button>                
                </div>
                <div className="border border-gray-200 py-2 px-5" ref={componentRef}>
                    <div className="flex items-center flex-col gap-2 mb-2">
                        <h1>POS</h1>
                        <p>Open from 8AM - 10PM</p>
                    </div>
                    <p>Phone: 09-97234565434</p>
                    <p>Casher: {detail?.staff.staffName}</p>
                    <p>{formattedDateTime(detail?.dateTime)}</p>
                    <Table className="mt-5">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Total($)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            detail.saleInvoiceDetails?.map((product: TInvoiceDetail,index:number)=>  (
                                    <TableRow key={index}>
                                        <TableCell>{product?.productCode}</TableCell>
                                        <TableCell align="center">{product?.quantity}</TableCell>
                                        <TableCell>{product?.price}</TableCell>
                                        <TableCell align="center">{product?.amount}</TableCell>
                                    </TableRow>
                                )
                            )
                        }
                    </TableBody>
                    </Table>
                    <div className="w-full h-[1px] bg-gray-300" />
                    <div className="flex justify-between px-5 py-2">
                        <p className="pb-0">Total Qty {totalQty}</p>
                        <div>
                            <p className=" pb-0 flex justify-between">
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
                    <div className="flex justify-between my-2 px-5">
                        <p>Total</p>
                        <p className="pr-2">{Math.round(detail.paymentAmount)}</p>
                    </div>
                    <div className="flex justify-between my-2 px-5">
                        <p className="capitalize">Paid By: {detail.paymentType}</p>
                        <p className="pr-2">{Math.round(detail.receiveAmount)}</p>
                    </div>
                    <div className="w-full h-[1px] bg-gray-300" />
                    <div className="flex justify-between my-3 px-5">
                        <p>Change:</p>
                        <p className="pr-2">{Math.round(detail.change)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SaleInvoiceDetails