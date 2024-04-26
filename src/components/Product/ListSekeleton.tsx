import {Skeleton} from "@/components/ui/skeleton.tsx";
import {cn} from "@/lib/utils.ts";

export default function ListSkeleton({className}: {className ?: string}) {
    console.log("list skeleton")
    return (
        <div className={cn("w-full h-[80vh] flex flex-col gap-y-8", className)}>
                <Skeleton className={"w-2/5 h-10 "}/>
                <Skeleton className={"w-full h-2/3  rounded-xl"}/>
                <Skeleton className={"w-2/5 h-10 self-end"}/>
        </div>
    )
}