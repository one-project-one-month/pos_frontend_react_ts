import CategoryList from "@/components/Category/CategoryList.tsx";
import CategoryListV2 from "@/components/Category/CategoryListV2.tsx";

const ProductsCategory = () => {


    return (
        <div className={"flex flex-col w-full"}>
            <CategoryList/>
            <CategoryListV2/>
        </div>
    );
};

export default ProductsCategory;