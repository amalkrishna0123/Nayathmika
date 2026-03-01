import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoTrendingUpOutline, IoBagCheckOutline, IoHeartOutline, IoWalletOutline } from 'react-icons/io5';
import { orders, adminStats } from '../data/orders';
import Badge from '../components/ui/Badge';

const stats = [
    { label: 'Total Orders', value: '3', icon: IoBagCheckOutline, color: 'text-blue-500 bg-blue-50' },
    { label: 'Wishlist Items', value: '5', icon: IoHeartOutline, color: 'text-red-500 bg-red-50' },
    { label: 'Total Spent', value: '₹93,249', icon: IoWalletOutline, color: 'text-green-500 bg-green-50' },
    { label: 'Reward Points', value: '2,340 pts', icon: IoTrendingUpOutline, color: 'text-[#C9A96E] bg-[#C9A96E]/10' },
];

export default function DashboardOverview() {
    return (
        <div>
            <div className="mb-8">
                <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-2">My Account</p>
                <h1 className="font-serif text-3xl font-light">Welcome back, Priya ✦</h1>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {stats.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="bg-white border border-gray-100 p-6"
                    >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${s.color}`}>
                            <s.icon size={18} />
                        </div>
                        <p className="font-serif text-2xl mb-1">{s.value}</p>
                        <p className="font-sans-luxury text-[10px] tracking-widest uppercase text-gray-400">{s.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-white border border-gray-100">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="font-sans-luxury text-xs tracking-[0.3em] uppercase">Recent Orders</h2>
                    <Link to="/dashboard/orders" className="font-sans-luxury text-xs text-[#C9A96E] tracking-widest uppercase hover:underline">View All</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                {['Order ID', 'Date', 'Items', 'Total', 'Status', ''].map(h => (
                                    <th key={h} className="text-left px-6 py-3 font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-gray-400">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id} className="border-b border-gray-50 hover:bg-[#FDFAF5] transition-colors">
                                    <td className="px-6 py-4 font-sans-luxury text-xs text-[#C9A96E]">{order.id}</td>
                                    <td className="px-6 py-4 font-sans-luxury text-xs text-gray-500">{order.date}</td>
                                    <td className="px-6 py-4 font-sans-luxury text-xs text-gray-600">{order.items.length} item(s)</td>
                                    <td className="px-6 py-4 font-serif text-sm">₹{order.total.toLocaleString('en-IN')}</td>
                                    <td className="px-6 py-4"><Badge status={order.status} /></td>
                                    <td className="px-6 py-4">
                                        <Link to={`/dashboard/orders/${order.id}`} className="font-sans-luxury text-[10px] tracking-widest uppercase text-gray-400 hover:text-[#C9A96E] transition-colors">View →</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
