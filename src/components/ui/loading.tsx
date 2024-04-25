
import { Loader2 } from "lucide-react"


const Loading = () => {
    return (
        <div className="px-8 flex items-center  justify-center w-full" >
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Fetching data
        </div>
    )
}

export default Loading