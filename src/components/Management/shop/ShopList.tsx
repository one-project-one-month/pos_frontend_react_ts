import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { Table, TableHeader, TableBody, TableCell, TableRow, TableHead } from "../../ui/table"
import { queryFn } from "@/services/api/management/queryFn"
import { TShop } from "@/type/type"
import { Button } from "../../ui/button"
import { Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useDeleteQuery } from "@/hook/management/useDeleteQuery"



const ShopList = () => {
    const { data: shops } = useCustomQuery<TShop[]>(
        "shops",
        () => queryFn("shops"),
        0,
    )

    const { mutate } = useDeleteQuery("shops")

    const navigate = useNavigate()

    return (


        <div className="w-[80%] flex flex-col m-8">

            <div className="flex justify-end mb-2">
                <Button
                    variant="outline"
                    size="default"
                    onClick={() => navigate("/management/shops/create")}
                >
                    <Plus size={18} className="mr-2" /> Add Shop
                </Button>
            </div>

            <Table className="rounded-md border">
                <TableHeader>
                    <TableRow>
                        {
                            shops ? (
                                Object.keys(shops[0]).map((key) => (

                                    <TableHead key={key} className="w-[100px]">{key}</TableHead>

                                ))
                            ) : null
                        }
                        <TableHead >Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        shops ? (
                            shops.map((shop) => (
                                <TableRow key={shop.id}>
                                    {Object.values(shop).map((value) => (
                                        <TableCell key={value} className="font-mediun">{value}</TableCell>
                                    ))}
                                    <TableCell onClick={() => mutate({ url: "shops", id: shop.id })} className="pointer">Delete</TableCell>
                                </TableRow>
                            ))

                        ) : null
                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default ShopList