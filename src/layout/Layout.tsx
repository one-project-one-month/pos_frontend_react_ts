import { Outlet } from "react-router-dom"
import SideNav from "./SideNav"
import { Home } from "@/Page/Home"



const Layout = () => {
    return (
        <div className="flex">
            <SideNav />
            <Outlet />
        </div>










    )
}

export default Layout