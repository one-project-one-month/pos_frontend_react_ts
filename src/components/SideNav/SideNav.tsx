import { navLinks } from '@/constants/nav-link-constant';
import SideNavLink from './SideNavLink';
import { ModeToggle } from '../ui/mode-toggle';
import { Store } from 'lucide-react';

const SideNav = () => {
    return (
        <aside className="min-h-screen flex flex-col border-r border-slate-200 bg-white/70 px-3 py-4 dark:border-slate-100/10 dark:bg-[#212121] ">
            <div
                className="mb-5 flex justify-between items-center rounded-lg px-1 py-2 text-slate-900 dark:text-white"
            >
                <div className='flex items-center'>
                    <Store size={36} className='ml-2 text-cyan-900 dark:text-slate-300' />
                    {/* <span className="ml-2 text-xl text-salte-900 dark:text-cyan-300 font-semibold">POS</span> */}
                </div>

                <ModeToggle />
            </div>
            <ul className="space-y-2 text-sm font-medium">
                {navLinks.map((navLink, i) => (
                    <SideNavLink key={i} navLink={navLink} />
                ))}
            </ul>
        </aside>


    )
}


export default SideNav
