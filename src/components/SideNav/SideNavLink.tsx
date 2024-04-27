import { cn } from "@/lib/utils"
import { TRoutes } from "@/type/routesType"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const SideNavLink = ({ navLink }: { navLink: TRoutes }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <li>
                <NavLink
                    to={navLink.route}
                    className={({ isActive }) => cn("w-full flex justify-between items-center rounded-lg px-3 py-2 text-slate-900  dark:text-white dark:hover:bg-slate-700", { "bg-slate-900 text-white": isActive })}
                    onClick={toggleDropDown}

                >
                    <div className='flex items-center'>
                        {navLink.icon}
                        <span className="ml-2">{navLink.routeName}</span>
                    </div>
                    {
                        navLink.subRoutes &&
                        <button
                            className={cn("rotate-0", "ml-4", { "rotate-180 transition-rotate duration-100 ease-in-out": isOpen })} >
                            <ChevronDown />
                        </button>
                    }
                </NavLink>
            </li>
            {isOpen && navLink.subRoutes?.map(subroute => (
                <NavLink
                    key={subroute.routeName}
                    to={subroute.route}
                    className={({ isActive }) => cn("flex items-center rounded-lg px-8 py-2 text-slate-900  dark:text-white dark:hover:bg-gray-100 ", { "text-slate-600": isActive })}
                    end
                >
                    <span>{subroute.routeName}</span>
                </NavLink>
            ))}
        </>
    )
}

export default SideNavLink