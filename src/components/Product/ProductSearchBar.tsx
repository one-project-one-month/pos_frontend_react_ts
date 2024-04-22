import {ChangeEvent} from "react";
import {useProductFilterStore} from "@/store/productFilerStore.ts";
import {SearchBar} from "@/components/Product/SearchBar.tsx";


export default function ProductSearchBar() {

    const {setSearchString} = useProductFilterStore();

    const inputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setSearchString(evt.target.value);
    };

    return (
        <div className={"max-w-productList relative flex justify-between items-center mb-4"}>
            <h2 className={"font-bold text-lg"}>Products</h2>
            <SearchBar handler={inputHandler} label={"Search Products"} placeholder={"Search Products By Name"}/>
        </div>
    );
}

