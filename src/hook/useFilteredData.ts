import {TProduct} from "@/type/type.ts";
import {useProductFilterStore} from "@/store/productFilerStore.ts";

export const useFilterData = (data: TProduct[] | undefined) => {
    const {currCategory, searchString} = useProductFilterStore();
    console.log(currCategory.length);
    console.log("searchString", searchString);
    if (data && currCategory.length !== 0) {
        if (searchString !== "") {
            const filteredData = data.filter(item => currCategory.includes(item.productCategoryCode))
                .filter(item => item.productName.toLowerCase() === searchString.toLowerCase());
            return {filteredData};
        } else {
            const filteredData = data.filter(item => currCategory.includes(item.productCategoryCode));
            return {filteredData};
        }

    } else {
        if (data && searchString !== "") {
            const filteredData = data.filter(item => item.productName.toLowerCase().includes(searchString.toLowerCase()));
            return {filteredData};
        }
        return {filteredData: data};
    }
};