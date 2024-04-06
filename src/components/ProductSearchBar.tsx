import {ChangeEvent} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {TProduct} from "@/type/type.ts";
import InputProvider, {useInputContext} from "@/provider/InputProvider.tsx";


export default function ProductSearchBar() {

    return (
        <div className={"w-3/5 relative"}>
            <InputProvider>
                <SearchBar/>
                <SearchBarResult/>
            </InputProvider>
        </div>
    );
}

function SearchBar() {

    const {input, setInput} = useInputContext();


    const inputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setInput(evt.target.value);
    };

    return (
        <div className={" py-2 px-4  flex justify-between items-center gap-x-2 bg-blue-50 rounded-2xl "}>
            <input id={"productFilter"} type={"search"}
                   className={"py-1 px-2 flex-grow outline-none bg-transparent text-gray-600 focus:outline-none focus:border-none"}
                   placeholder={"Search products..."}
                   value={input?.toString()}
                   onChange={inputHandler}
            />
            <label className={"block h-5 aspect-square"} htmlFor={"productFilter"}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512">
                    <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
            </label>
        </div>
    );
}

function SearchBarResult() {
    const {input} = useInputContext();
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData<TProduct[]>(["products"])
    const filteredData = (data && input !== "") ? data.filter(item => item.productName.toLowerCase().includes(input.toLocaleLowerCase())) : [];

    return (
        (filteredData.length !== 0 && <ul className={"w-full max-h-[300px] absolute p-4 my-4 rounded-2xl bg-[#eee] overflow-y-scroll"}>
              {filteredData.map(item => <li key={item.productCode}
                                            className={"pl-4 py-2 border-b border-b-blue-300  text-cyan-900 last:border-b-transparent"}>{item.productName}</li>)}
        </ul>)
    );
}