import CustomerList from "@/components/Management/customer/CustomerList"



const Customers = () => {
    return (
        <div className="w-full flex flex-col">
            <h1 className={"mx-8 mt-4 text-cyan-900 font-bold text-xl"}>Staff List</h1>
            <CustomerList />
        </div>
    )
}

export default Customers