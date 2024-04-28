import StaffList from "@/components/Management/staff/StaffList"




const Staffs = () => {
    return (
        <section className="flex flex-col">
            <h1 className={"mx-8 mt-4 text-cyan-900 font-bold text-xl dark:text-dark-tertiary"}>Staff List</h1>
            <StaffList />
        </section>
    )
}

export default Staffs