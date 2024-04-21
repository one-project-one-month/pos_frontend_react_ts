import {ChangeEvent} from "react";
import {useProductFilterStore} from "@/store/productFilerStore.ts";


export default function ProductSearchBar() {

    return (
        <div className={"max-w-productList relative flex justify-between items-center mb-4"}>
            <h2 className={"font-bold text-lg"}>Products</h2>
            <SearchBar/>
        </div>
    );
}

function SearchBar() {


    const {setSearchString} = useProductFilterStore();


    const inputHandler = (evt: ChangeEvent<HTMLInputElement>) => {

        setSearchString(evt.target.value);
    };

    return (
        <div className={" py-2 px-4  flex justify-between items-center gap-x-2 bg-blue-50 rounded-2xl "}
        >
            <label className={"sr-only"} htmlFor={"productFilter"}>
                Search Products
            </label>
            <input id={"productFilter"} type={"search"}
                   className={"py-1 px-2 flex-grow outline-none bg-transparent text-gray-600 focus:outline-none focus:border-none"}
                   placeholder={"Search products..."}
                   name={"search"}
                   onChange={inputHandler}
            />
        </div>
    );
}