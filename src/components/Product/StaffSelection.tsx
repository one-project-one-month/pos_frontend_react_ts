import { Select, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { SelectContent } from "@radix-ui/react-select";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api/api-client.ts";
import { TStaff } from "@/type/type.ts";
import { useCartStore } from "@/store/cartStore.ts";

const tempQueryFunction = async () => {
    const { data } = await apiClient.get("staffs");
    const response = data.data as { staffs: TStaff[] };
    return response.staffs;
};

export default function StaffSelection() {
    const { data: staffs } = useQuery({
        queryKey: ["staffs"],
        queryFn: tempQueryFunction
    });


    const { addStaff } = useCartStore();

    const onSelect = (value: string) => {
        addStaff(value);
    };

    return (
        <div>
            <Select onValueChange={onSelect}>
                <SelectTrigger className={"w-60 dark:bg-dark-tertiary"}>
                    <SelectValue placeholder={"Choose Staff"} />
                </SelectTrigger>
                <SelectContent className={"w-60 h-50 overflow-y-scroll rounded bg-primary backdrop-brightness-0 dark:bg-dark-primary z-20"}>
                    {staffs &&
                        staffs.map(staff =>
                            <SelectItem
                                value={staff.staffCode}
                                key={staff.staffId}
                                className={"py-3  text-cyan-900 dark:text-dark-tertiary"}>{staff.staffName}</SelectItem>)}
                </SelectContent>
            </Select>
        </div>
    );
}