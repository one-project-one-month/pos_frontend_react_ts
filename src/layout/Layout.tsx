import { Outlet } from "react-router-dom"
import SideNav from "../components/SideNav"

const Layout = () => {
    return (
        <div className="flex">
            <SideNav />
            <Outlet />
        </div>
    )
}

export default Layout