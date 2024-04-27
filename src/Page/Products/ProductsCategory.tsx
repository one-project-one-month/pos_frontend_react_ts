import CategoryList from "@/components/Category/CategoryList.tsx";


const ProductsCategory = () => {
    return (
        <section className={"w-full p-8 flex flex-col"}>
            <h1 className={"mx-8 mb-8 text-cyan-900 font-bold text-xl dark:text-teal-50"}>Product Categories</h1>
            <CategoryList />
        </section>
    );
};

export default ProductsCategory;