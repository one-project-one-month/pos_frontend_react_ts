import {ChangeEvent, useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Form} from "react-router-dom";


export default function ProductSearchBar() {

    return (
        <div className={"max-w-productList relative flex justify-between items-center mb-4"}>
            <h2 className={"font-bold text-lg"}>Products</h2>
            <SearchBar/>
        </div>
    );
}

function SearchBar() {


    const [input, setInput] = useState("")

    const inputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setInput(evt.target.value);
    };

    return (
        <Form className={" py-2 px-4  flex justify-between items-center gap-x-2 bg-blue-50 rounded-2xl "} method={"GET"}>
            <label className={"sr-only"} htmlFor={"productFilter"}>
                Search Products
            </label>
            <input id={"productFilter"} type={"search"}
                   className={"py-1 px-2 flex-grow outline-none bg-transparent text-gray-600 focus:outline-none focus:border-none"}
                   placeholder={"Search products..."}
                   value={input}
                   name={"search"}
                   onChange={inputHandler}
            />
            <Button className={"bg-transparent"} type={"submit"}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512"
                     className={"aspect-square h-4 fill-green-500"}
                >
                    <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
            </Button>
        </Form>
    );
}