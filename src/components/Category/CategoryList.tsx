import {Button} from "@/components/ui/button.tsx";
import {EllipsisVertical, Plus} from "lucide-react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {useProductCategories} from "@/services/api/query.ts";
import {Link, useNavigate} from "react-router-dom";
import {capitalize} from "@/lib/utils.ts";
import {useDeleteQuery} from "@/hook/management/useDeleteQuery.ts";

export default function CategoryList(){
    const {data} = useProductCategories();

    const {mutate} = useDeleteQuery("categories")

    const navigate = useNavigate();

    return (
        <div className="w-[80%] flex flex-col m-8">

            <div className="flex justify-end mb-2">
                <Button
                    variant="outline"
                    size="default"
                    onClick={() => navigate("create")}
                >
                    <Plus size={18} className="mr-2"/> Add Categories
                </Button>
            </div>

            <Table className="rounded-md border">
                <TableHeader>
                    <TableRow>
                        {
                            data ? (
                                Object.keys(data[0]).map((key) => (
                                    <TableHead key={key} className="w-[100px]">{capitalize(key)}</TableHead>
                                ))
                            ) : null
                        }
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data ? (
                            data.map((category) => (
                                <TableRow key={category.id}>
                                    {Object.values(category).map((value) => (
                                        <TableCell key={value} className="font-mediun">{value}</TableCell>
                                    ))}
                                    <TableCell className={"w-2"}>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <EllipsisVertical className={"w-fit"}/>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuContent sideOffset={6} className="min-w-6">
                                                    <DropdownMenuItem className="flex flex-col">
                                                        <Button className="w-full mb-2" variant={"outline"}
                                                                onClick={() => mutate({url: "product-Categories", id:category.id.toString()})}>Delete</Button>
                                                        <Button className={"w-full h-full px-0 py-0"} variant={"outline"}>
                                                            <Link to={"edit"} state={category} className={"w-full py-2 "}>Edit</Link>
                                                        </Button>
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
            </Table>
        </div>
    )
}