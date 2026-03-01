import { useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    IoSpeedometerOutline, IoCubeOutline, IoListOutline, IoPeopleOutline,
    IoTicketOutline, IoMegaphoneOutline, IoBarChartOutline, IoSettingsOutline,
    IoHomeOutline, IoMenuOutline, IoCloseOutline, IoNotificationsOutline,
    IoPersonCircleOutline, IoChevronDownOutline,
} from 'react-icons/io5';

const navGroups = [
    {
        label: 'Main', links: [
            { to: '/admin', label: 'Dashboard', icon: IoSpeedometerOutline, end: true },
        ]
    },
    {
        label: 'Catalog', links: [
            { to: '/admin/products', label: 'Products', icon: IoCubeOutline },
            { to: '/admin/categories', label: 'Categories', icon: IoListOutline },
        ]
    },
    {
        label: 'Commerce', links: [
            { to: '/admin/orders', label: 'Orders', icon: IoListOutline },
            { to: '/admin/customers', label: 'Customers', icon: IoPeopleOutline },
            { to: '/admin/coupons', label: 'Coupons & Offers', icon: IoTicketOutline },
        ]
    },
    {
        label: 'Content', links: [
            { to: '/admin/cms', label: 'CMS', icon: IoMegaphoneOutline },
            { to: '/admin/marketing', label: 'Marketing', icon: IoMegaphoneOutline },
        ]
    },
    {
        label: 'Analytics', links: [
            { to: '/admin/reports', label: 'Reports', icon: IoBarChartOutline },
        ]
    },
    {
        label: 'System', links: [
            { to: '/admin/settings', label: 'Settings', icon: IoSettingsOutline },
        ]
    },
];

export default function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileSidebar, setMobileSidebar] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Mobile overlay */}
            <AnimatePresence>
                {mobileSidebar && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setMobileSidebar(false)}
                        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                animate={{ width: sidebarOpen ? 240 : 64 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={`
          bg-[#1a1a1a] text-white h-screen flex-shrink-0 flex flex-col overflow-hidden z-50
          ${mobileSidebar ? 'fixed' : 'hidden lg:flex'}
        `}
                style={{ width: mobileSidebar ? 240 : undefined }}
            >
                {/* Admin logo */}
                <div className="px-5 py-5 border-b border-white/10 flex items-center justify-between">
                    {sidebarOpen && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <p className="font-serif text-base tracking-[0.2em] uppercase text-white">Nayathmika</p>
                            <p className="font-sans-luxury text-[8px] tracking-[0.5em] text-[#C9A96E] uppercase">Admin Panel</p>
                        </motion.div>
                    )}
                    <button onClick={() => { setSidebarOpen(!sidebarOpen); setMobileSidebar(false); }} className="text-gray-400 hover:text-white p-1">
                        <IoMenuOutline size={20} />
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex-1 overflow-y-auto py-4">
                    {navGroups.map(group => (
                        <div key={group.label} className="mb-4">
                            {sidebarOpen && (
                                <p className="px-5 py-1 font-sans-luxury text-[9px] tracking-[0.4em] uppercase text-gray-600">{group.label}</p>
                            )}
                            {group.links.map(({ to, label, icon: Icon, end }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    end={end}
                                    onClick={() => setMobileSidebar(false)}
                                    className={({ isActive }) => `
                    flex items-center gap-3 px-5 py-2.5 font-sans-luxury text-[11px] tracking-widest uppercase
                    transition-all duration-200 border-l-2
                    ${isActive
                                            ? 'text-[#C9A96E] bg-white/5 border-[#C9A96E]'
                                            : 'text-gray-500 hover:text-gray-200 border-transparent hover:bg-white/5'
                                        }
                  `}
                                >
                                    <Icon size={16} className="flex-shrink-0" />
                                    {sidebarOpen && <span className="truncate">{label}</span>}
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </nav>

                {/* Back to store */}
                {sidebarOpen && (
                    <div className="p-5 border-t border-white/10">
                        <Link to="/" className="flex items-center gap-2 font-sans-luxury text-[10px] tracking-widest uppercase text-gray-600 hover:text-[#C9A96E] transition-colors">
                            <IoHomeOutline size={14} /> Back to Store
                        </Link>
                    </div>
                )}
            </motion.aside>

            {/* Main area */}
            <div className="flex-1 min-w-0 flex flex-col">
                {/* Topbar */}
                <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
                    <button onClick={() => setMobileSidebar(true)} className="lg:hidden text-gray-500">
                        <IoMenuOutline size={22} />
                    </button>
                    <h1 className="font-sans-luxury text-xs tracking-[0.3em] uppercase text-gray-500 hidden sm:block">
                        Admin Panel
                    </h1>
                    <div className="flex items-center gap-4 ml-auto">
                        <button className="relative text-gray-500 hover:text-[#C9A96E] transition-colors">
                            <IoNotificationsOutline size={20} />
                            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#C9A96E] text-[8px] text-white flex items-center justify-center">3</span>
                        </button>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-[#C9A96E]/20 flex items-center justify-center">
                                <IoPersonCircleOutline className="text-[#C9A96E]" size={20} />
                            </div>
                            <span className="font-sans-luxury text-xs text-gray-600 hidden sm:block">Admin</span>
                            <IoChevronDownOutline size={12} className="text-gray-400" />
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-6 md:p-8 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
