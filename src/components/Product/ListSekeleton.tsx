import {Skeleton} from "@/components/ui/skeleton.tsx";

export default function ListSkeleton() {
    console.log("list skeleton")
    return (
        <div className={"w-full flex flex-col gap-y-8 "}>
                <Skeleton className={"w-2/5 h-10 "}/>
                <Skeleton className={"w-full h-[500px] rounded-xl"}/>
                <Skeleton className={"w-2/5 h-10 self-end"}/>
        </div>
    )
}