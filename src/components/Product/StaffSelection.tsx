import {Select, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {SelectContent} from "@radix-ui/react-select";
import {useQuery} from "@tanstack/react-query";
import apiClient from "@/services/api/api-client.ts";
import {TStaff} from "@/type/type.ts";
import {useCartStore} from "@/store/cartStore.ts";

const tempQueryFunction = async () => {
    const {data} = await apiClient.get("staffs");
    const response = data.data as { staffs: TStaff[] };
    return response.staffs;
};

export default function StaffSelection() {
    const {data: staffs} = useQuery({
        queryKey: ["staffs"],
        queryFn: tempQueryFunction
    });


    const {addStaff} = useCartStore();

    const onSelect = (value: string) => {
        addStaff(value);
    };

    return (
        <Select onValueChange={onSelect}>
            <SelectTrigger className={"w-60 dark:bg-emerald-400 outline-0"}>
                <SelectValue placeholder={"Choose Staff"}/>
            </SelectTrigger>
            <SelectContent className={"w-60 gap-y-2 bg-zinc-700"}>
                {staffs && staffs.map(staff => <SelectItem value={staff.staffCode} key={staff.staffId}
                                                           className={"w-full py-3 text-white"}>{staff.staffName}</SelectItem>)}
            </SelectContent>
        </Select>
    );
}