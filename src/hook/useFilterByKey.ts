import {useState} from "react";

export const useFilterByKey = <T>(data: T[] | undefined, key: keyof T) => {
    const [searchString, setSearchString] = useState("");
    const filteredData = data && data.filter(item => {
        const type = typeof item[key];
        if (type === "number") {
            const currItem = item[key] as number;
            return currItem.toString().toLowerCase().includes(searchString.toLowerCase());
        } else if (type === "string") {
            const currItem = item[key] as string;
            return currItem.toLowerCase().includes(searchString.toLowerCase());
        }
    });
    return {filteredData: searchString !== "" ? filteredData : data, setSearchString};
};