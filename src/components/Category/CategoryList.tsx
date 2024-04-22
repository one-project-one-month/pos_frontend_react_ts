import {Button} from "@/components/ui/button.tsx";
import {EllipsisVertical, Plus} from "lucide-react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {capitalize} from "@/lib/utils.ts";
import {useDeleteQuery} from "@/hook/management/useDeleteQuery.ts";
import {useCurrentPage} from "@/hook/useCurrentPage.ts";
import {useCustomQueryByPage} from "@/hook/management/useCustomQuery.ts";
import {TProductCategory} from "@/type/type.ts";
import useRenderPagination from "@/hook/management/useRenderPagination.tsx";
import {toast} from "@/components/ui/use-toast.ts";

export default function CategoryList() {
    const {page} = useCurrentPage();
    const {data: categories} = useCustomQueryByPage<TProductCategory>(
        "product-Categories",
        page,
    );
    
    const [, setSearchParams] = useSearchParams();

    const mutation = useDeleteQuery("product-Categories");

    const navigate = useNavigate();

    const paginationElement = useRenderPagination({next: categories?.next, prev: categories?.prev, page: page});

    const handleDelete = async (id: string) => {
        await mutation.mutateAsync({url: "product-Categories", id});
        // @ts-expect-error categories !== null
        if (categories?.items % 5 === 1) {
            // @ts-expect-error categories !== null
            setSearchParams({page: String(Math.ceil((categories?.items / 5) - 1))});
        }

        toast({description: "Successfully Deleted"});
    };


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
                            categories ? (
                                Object.keys(categories.data[0]).map((key) => (
                                    <TableHead key={key} className="w-[100px]">{capitalize(key)}</TableHead>
                                ))
                            ) : null
                        }
                        <TableHead key={"action"}>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        categories ? (
                            categories.data.map((category) => (
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
                                                                onClick={async () => await handleDelete(category.id.toString())}>Delete</Button>
                                                        <Button className={"w-full h-full px-0 py-0"}
                                                                variant={"outline"}>
                                                            <Link to={`edit/${category.id}`}
                                                                  className={"w-full py-2 "}>Edit</Link>
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

            {paginationElement}
        </div>
    );
}