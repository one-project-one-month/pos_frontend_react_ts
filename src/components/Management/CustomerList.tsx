import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { queryFn } from "@/services/api/management/queryFn"
import { TCustomer } from "@/type/type"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useParams } from "react-router-dom"


const CustomerList = () => {

    const { data: customers } = useCustomQuery<TCustomer[]>(
        "customers",
        () => queryFn("customers"),
        0,
    )




    return (
        <div className="w-[80%] flex flex-col m-8">
            <div className="flex justify-end mb-2">
                <Button
                    variant="outline"
                    size="default"
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
                                </TableRow>
                            ))

                        ) : null
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default CustomerList