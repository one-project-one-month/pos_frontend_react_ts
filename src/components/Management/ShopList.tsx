import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { Table, TableHead, TableHeader, TableBody, TableCell, TableRow } from "../ui/table"
import { queryFn } from "@/services/api/management/queryFn"
import { TShop } from "@/type/type"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"



const ShopList = () => {
    const { data: shops } = useCustomQuery<TShop[]>(
        "shops",
        () => queryFn("shops"),
        0,
    )

    return (
        <div className="w-[80%] flex flex-col m-8">

            <div className="flex justify-end mb-2">
                <Button
                    variant="outline"
                    size="default"
                // onClick={() => table.nextPage()}
                // disabled={!table.getCanNextPage()}
                >
                    <Plus size={18} className="mr-2" /> Add Shop
                </Button>
            </div>

            <Table className="rounded-md border">
                <TableHeader>
                    {/* <TableRow>
                        {
                            shops?.map((shop, i) => (
                                <TableHead key={shop.id} className="w-[100px]">{Object.keys(shop)[i]}</TableHead>
                            ))
                        }
                    </TableRow> */}
                    {/* {Object.keys(shops.id)} */}
                </TableHeader>
                <TableBody>
                    {shops?.map(shop => (
                        <TableRow key={shop.id}>
                            <TableCell className="font-mediun">{shop.id}</TableCell>
                            <TableCell className="font-mediun">{shop.shopCode}</TableCell>
                            <TableCell className="font-mediun">{shop.shopName}</TableCell>
                            <TableCell className="font-mediun">{shop.address}</TableCell>
                            <TableCell className="font-mediun">{shop.mobileNo}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default ShopList