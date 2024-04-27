
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"


const Loading = ({ message, className }: { message: string, className?: string }) => {
    return (
        <div className={cn("px-8 flex items-center dark:text-white", className)} >
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {message}
        </div>
    )
}

export default Loading