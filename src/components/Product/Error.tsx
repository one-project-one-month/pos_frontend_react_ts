import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

export default function Error({children, className}: { children: ReactNode, className?: string }) {


    return (
        <div className={twMerge("absolute top-0 right-4 text-red-700", className)}>
            {children}
        </div>
    );

}