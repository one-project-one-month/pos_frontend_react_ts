import {ChangeEvent} from "react";

type SearchBarProps = {handler : (evt: ChangeEvent<HTMLInputElement>) => void, label: string, placeholder: string}

export  function SearchBar({handler, label, placeholder} :SearchBarProps ) {


    return (
        <div className={" py-2 px-4 bg-blue-50 rounded-2xl "}
        >
            <label className={"sr-only"} htmlFor={"productFilter"}>
                {label}
            </label>
            <input id={"productFilter"} type={"search"}
                   className={"py-1 px-2 flex-grow outline-none bg-transparent text-gray-600 focus:outline-none focus:border-none"}
                   placeholder={placeholder}
                   name={"search"}
                   onChange={handler}
            />
        </div>
    );
}