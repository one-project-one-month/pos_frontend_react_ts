import { cn } from '@/lib/utils';
import { Home, Package, NotepadText, History, Store } from 'lucide-react';
import { NavLink } from "react-router-dom"

const navLinks = [
    {
        routeName: "Home",
        icon: <Home />,
        route: "/"
    },
    {
        routeName: "Products",
        icon: <Package />,
        route: "/products"
    },
    {
        routeName: "Invoice",
        icon: <NotepadText />,
        route: "/invoice"
    },
    {
        routeName: "History",
        icon: <History />,
        route: "/history"
    },
]

const SideNav = () => {
    return (
        <aside
            id="sidebar"
            className="group h-screen transition-all duration-300"
            aria-label="Sidebar"
        >
            <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white/70 px-3 py-4 dark:border-slate-700 dark:bg-slate-900">
                <div
                    className="mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white"
                >
                    <Store />
                    <span className="hidden group-hover:flex ml-3 text-base font-semibold">POS</span>
                </div>
                <ul className="space-y-2 text-sm font-medium">
                    {navLinks.map(navLink => (
                        <li key={navLink.routeName}>
                            <NavLink
                                to={navLink.route}
                                className={({ isActive }) => cn("flex items-center rounded-lg px-3 py-2 text-slate-900  dark:text-white dark:hover:bg-slate-700", { "bg-slate-900 text-white": isActive })}
                            >
                                {navLink.icon}
                                <span className="hidden group-hover:flex ml-3 flex-1 whitespace-nowrap">{navLink.routeName}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside >

    )
}

export default SideNav
