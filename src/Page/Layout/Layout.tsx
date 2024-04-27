import { Outlet } from "react-router-dom"
import SideNav from "../../components/SideNav/SideNav"

const Layout = () => {
    return (
        <div className="flex dark:bg-black">
            <SideNav />
            <Outlet />
        </div>
    )
}

export default Layout