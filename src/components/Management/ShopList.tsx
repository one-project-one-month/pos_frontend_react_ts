import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { Table, TableHead, TableHeader, TableBody, TableCell, TableRow, TableCaption } from "../ui/table"
import { queryFn } from "@/services/api/management/queryFn"
import { TShop } from "@/type/type"

Table
const ShopList = () => {
    const { data: shops } = useCustomQuery<TShop[]>(
        "shops",
        () => queryFn("shops"),
        0,
    )

    return (
        <Table className="w-2/3">
            <TableHeader>
                <TableRow>
                    {
                        shops?.map((shop, i) => (
                            <TableHead key={shop.id} className="w-[100px]">{Object.keys(shop)[i]}</TableHead>
                        ))
                    }
                </TableRow>
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





    )
}

export default ShopList