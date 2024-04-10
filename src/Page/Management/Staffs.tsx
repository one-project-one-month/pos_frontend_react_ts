import { useCustomQuery } from "@/hook/management/useCustomQuery"
import { queryFn } from "@/services/api/management/queryFn"
import { TShop, TStaff } from "@/type/type"

const Staffs = () => {
    const { data: staff } = useCustomQuery<TStaff[]>("staffs", () => queryFn("staffs"))
    const { data: shop } = useCustomQuery<TShop[]>("shops", () => queryFn("shops"))
    return (
        <>
            {shop?.map(data => (
                <p>{data.shopCode}</p>
            ))}
            {staff?.map(data => (
                <p>{data.address}</p>
            ))}
        </>
    )
}

export default Staffs