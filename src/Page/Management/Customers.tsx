import CustomerList from "@/components/Management/customer/CustomerList"



const Customers = () => {
    return (
        <section className="w-4/5 m-auto">
            <h1 className={"mx-8 mt-4 text-cyan-900  dark:text-dark-tertiary font-bold text-xl"}>Customer List</h1>
            <CustomerList />
        </section>
    )
}

export default Customers