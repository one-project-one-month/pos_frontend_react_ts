import { useCustomQueryByPage } from "@/hook/management/useCustomQuery"
import { Table, TableHeader, TableBody, TableCell, TableRow, TableHead, TableFooter } from "../../ui/table"
import { TShop } from "@/type/type"
import { Button } from "../../ui/button"
import { EllipsisVertical, Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useDeleteQuery } from "@/hook/management/useDeleteQuery"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"
import { capitalize } from "@/lib/utils"
import { useCurrentPage } from "@/hook/useCurrentPage"
import useRenderPagination from "@/hook/management/useRenderPagination"


const ShopList = () => {
    const { page } = useCurrentPage()
    const { data: shops } = useCustomQueryByPage<TShop>(
        "shops",
        page,
    )



    const { mutate } = useDeleteQuery("shops")

    const navigate = useNavigate()

    const handleDelete = (id: string) => {
        mutate({ url: "shops", id })
        toast({ description: "Successfully Deleted" })
    }


    const paginationElement = useRenderPagination({ next: shops?.next, prev: shops?.prev, page: page })

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
                            shops?.data ? (
                                Object.keys(shops?.data[0]).map((key) => (
                                    <TableHead key={key} className="w-[100px]">{capitalize(key)}</TableHead>
                                ))
                            ) : null
                        }
                        <TableHead >Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        shops?.data ? (
                            shops?.data.map((shop) => (
                                <TableRow key={shop.id}>
                                    {Object.values(shop).map((value) => (
                                        <TableCell key={value} className="font-mediun">{value}</TableCell>
                                    ))}
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <EllipsisVertical />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuContent sideOffset={6} className="min-w-6">
                                                    <DropdownMenuItem className="flex flex-col">
                                                        <Button className="w-full mb-2" variant={"outline"} onClick={() => handleDelete(shop.id)}>Delete</Button>
                                                        <Button className="w-full" variant={"outline"} onClick={() => navigate(`edit/${shop.id}`)}>Edit</Button>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))

                        ) : <TableRow>
                            <TableCell>
                                No Data
                            </TableCell>
                        </TableRow>

                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell>
                            {paginationElement}
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}

export default ShopList