import { TCustomer } from "@/type/type";
import { ColumnDef } from "@tanstack/react-table";

export const customerColumns: ColumnDef<TCustomer>[] = [
    {
        accessorKey: "customerCode",
        header: "CustomerCode"
    },
    {
        accessorKey: "customerName",
        header: "CustomerName"
    },
    {
        accessorKey: "mobileNo",
        header: "MobileNo"
    },
    {
        accessorKey: "dateOfBirth",
        header: "DateOfBirth"
    },
    {
        accessorKey: "gender",
        header: "Gender"
    },
    {
        accessorKey: "stateCode",
        header: "StateCode"
    },
    {
        accessorKey: "townshipCode",
        header: "TownshipCode"
    }

]