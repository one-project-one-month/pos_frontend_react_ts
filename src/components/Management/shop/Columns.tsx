import DropdownComponnet from "@/components/ui/dropdown-component";
import { TCustomer, TShop } from "@/type/type";
import { ColumnDef } from "@tanstack/react-table";

export const shopColumns: ColumnDef<TShop>[] = [
    {
        accessorKey: "shopCode",
        header: "ShopCode"
    },
    {
        accessorKey: "shopName",
        header: "ShopName"
    },
    {
        accessorKey: "mobileNo",
        header: "MobileNo"
    },
    {
        accessorKey: "address",
        header: "Address"
    },
    {
        id: "actions",
        cell: () => {
            return (
                <DropdownComponnet>
                    <button onClick={() => alert("hello")}>Edit</button>
                    <button>Delete</button>
                </DropdownComponnet>
            )
        }

    }
]

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