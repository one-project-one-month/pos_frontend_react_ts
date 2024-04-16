import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { queryFn } from "@/services/api/management/queryFn"
import { TCustomer } from "@/type/type"
import { Button } from "../../ui/button"
import { EllipsisVertical, Plus } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table"
import { useNavigate } from "react-router-dom"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal } from "@/components/ui/dropdown-menu"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { useDeleteQuery } from "@/hook/management/useDeleteQuery"



const CustomerList = () => {

    const { data: customers } = useCustomQuery<TCustomer[]>(
        "customers",
        () => queryFn("customers"),
        0,
    )
    const { mutate } = useDeleteQuery("customers")

    const navigate = useNavigate()




    return (
        <div className="w-[80%] flex flex-col m-8">
            <div className="flex justify-end mb-2">
                <Button
                    variant="outline"
                    size="default"
                    onClick={() => navigate("/management/customers/create")}
                >
                    <Plus size={18} className="mr-2" /> Add customer
                </Button>
            </div>

            <Table className="rounded-md border">
                <TableHeader>
                    <TableRow>
                        {
                            customers ? (
                                Object.keys(customers[0]).map((key) => (
                                    <TableHead key={key} className="w-[100px]">{key}</TableHead>
                                ))
                            ) : null
                        }
                        <TableHead>Actions</TableHead>
                    </TableRow>

                </TableHeader>
                <TableBody>
                    {
                        customers ? (
                            customers.map((customer) => (
                                <TableRow key={customer.id}>
                                    {Object.values(customer).map((value) => {
                                        return (
                                            <TableCell key={value} className="font-mediun">{value}</TableCell>
                                        )
                                    })}
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <EllipsisVertical />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuContent sideOffset={6} className="min-w-6">
                                                    <DropdownMenuItem >
                                                        <Button className="w-full" variant={"outline"} onClick={() => mutate({ url: "customers", id: customer.id })}>Delete</Button>
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

export default CustomerList