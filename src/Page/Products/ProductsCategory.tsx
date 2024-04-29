import CategoryList from "@/components/Category/CategoryList.tsx";


const ProductsCategory = () => {
    return (
        <section className="w-4/5 m-auto pt-4">
            <h1 className={"mx-8 text-tertiary font-bold text-xl dark:text-dark-tertiary"}>Product Categories</h1>
            <CategoryList />
        </section >
    );
};

export default ProductsCategory;