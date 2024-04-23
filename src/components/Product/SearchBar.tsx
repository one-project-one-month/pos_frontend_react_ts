import { cn } from "@/lib/utils";
import { ChangeEvent } from "react";

type SearchBarProps = { handler: (evt: ChangeEvent<HTMLInputElement>) => void, label: string, placeholder: string, className?: string }

export function SearchBar({ handler, label, placeholder, className }: SearchBarProps) {
    return (
        <div className={"p-1 bg-slate-900 rounded "}
        >
            <label className={"sr-only"} htmlFor={"productFilter"}>
                {label}
            </label>
            <input id={"productFilter"} type={"search"}
                className={cn("py-1 px-2 flex-grow outline-none bg-transparent text-white focus:outline-none focus:border-none placeholder:text-sm", className)}
                placeholder={placeholder}
                name={"search"}
                onChange={handler}
            />
        </div>
    );
}