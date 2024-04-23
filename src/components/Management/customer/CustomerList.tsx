import { useCustomQueryByPage } from "@/hook/management/useCustomQuery"
import { TCustomer } from "@/type/type"
import { Button } from "../../ui/button"
import { BadgeX, Plus } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useDeleteQuery } from "@/hook/management/useDeleteQuery"
import { toast } from "@/components/ui/use-toast"
import { capitalize } from "@/lib/utils"
import DropdownComponnet from "@/components/ui/dropdown-component"
import { useCurrentPage } from "@/hook/useCurrentPage"
import useRenderPagination from "@/hook/management/useRenderPagination"
import { useFilterByKey } from "@/hook/useFilterByKey"
import { SearchBar } from "@/components/Product/SearchBar"




const CustomerList = () => {
    const { page } = useCurrentPage()
    const [, setSearchParams] = useSearchParams()

    const { data: customers } = useCustomQueryByPage<TCustomer>(
        "customers",
        page,
    )
    const { mutate } = useDeleteQuery("customers")

    const navigate = useNavigate()

    const { filteredData, setSearchString } = useFilterByKey<TCustomer>(customers?.data, "customerName")
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(event.target.value)
    }

    const handleDelete = (id: string) => {
        mutate({ url: "customers", id })
        if (customers?.items! % 5 === 1) {
            setSearchParams({ page: String(Math.ceil((customers?.items! / 5) - 1)) })
        }
        toast({ description: "Successfully Deleted" })
    }

    const paginationElement = useRenderPagination({ next: customers?.next, prev: customers?.prev, page: page })




    return (
        <div className="flex flex-col m-8">
            <div className="flex justify-between mb-2">
                <SearchBar
                    handler={inputHandler}
                    label={"Search Customer"}
                    placeholder={"Search Customer by Name"}
                />
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
                            customers?.data ? (
                                Object.keys(customers.data[0]).map((key) => (
                                    <TableHead key={key} className="w-[100px]">{capitalize(key)}</TableHead>
                                ))
                            ) : null
                        }
                        <TableHead>Actions</TableHead>
                    </TableRow>

                </TableHeader>
                <TableBody>

                    {
                        filteredData ? (
                            <>
                                {filteredData.map((customer) => (
                                    <TableRow key={customer.id}>
                                        {Object.values(customer).map((value) => {
                                            return (
                                                <TableCell key={value} className="font-mediun">{value}</TableCell>
                                            )
                                        })}
                                        <TableCell>
                                            <DropdownComponnet>
                                                <Button className="w-full  mb-2" variant={"outline"} onClick={() => handleDelete(customer.id)}>Delete</Button>
                                                <Button className="w-full" variant={"outline"} onClick={() => navigate(`edit/${customer.id}`)}>Edit</Button>
                                            </DropdownComponnet>


                                        </TableCell>
                                    </TableRow>
                                ))}
                            </>

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
    )
}

export default CustomerList