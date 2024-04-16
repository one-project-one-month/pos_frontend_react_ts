import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"

const SaleInvoiceDetails = () => {
    return (
        <div className="w-96 mx-auto my-10">
            <div className="border border-gray-200 py-3 px-5">
                <div className="flex items-center flex-col gap-2 mb-3">
                    <h1>POS</h1>
                    <p>Open from 8AM - 10PM</p>
                </div>
                <p>Phone: 09-97234565434</p>
                <p>Casher: Shine</p>
                <p>4/14/2024 11:00 AM</p>
                <Table className="mt-5">
                <TableHeader>
                    <TableRow>
                    <TableHead>Item Name</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total(ks)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell>Bag</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>40,000</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>Top</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>15,000</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
                <div className="w-full h-[1px] bg-gray-300" />
                <div className="flex justify-between">
                    <p className="pt-4 pb-0">Total Qty 2</p>
                    <div>
                        <p className="pt-4 pb-0 pr-4 flex justify-between">
                            Sub Total: 
                            <span className="px-4">55,000</span>
                        </p>
                        <p className="py-0 pr-4 flex justify-between">
                            Discount:  
                            <span className="px-4">0.00</span>
                        </p>
                        <p className="py-0 pr-4 flex justify-between">
                            Tax: 
                            <span className="px-4">7</span>
                        </p>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300" />
                <div className="flex justify-between my-3">
                    <p>Paid By: Cash(ks)</p>
                    <p className="pr-8">60,000</p>
                </div>
                <div className="w-full h-[1px] bg-gray-300" />
                <div className="flex justify-between my-3">
                    <p>Changed:</p>
                    <p className="pr-8">500</p>
                </div>
            </div>
            <div className="text-center mt-4">
                <button className="bg-gray-900 text-white inline-block py-2 px-8 rounded-md">Print</button>                
            </div>
        </div>
    )
}

export default SaleInvoiceDetails