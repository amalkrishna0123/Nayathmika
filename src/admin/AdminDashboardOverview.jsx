import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts';
import { revenueData, salesData, adminStats, orders } from '../data/orders';
import Badge from '../components/ui/Badge';

const stats = [
    { label: 'Total Revenue', value: `₹${(adminStats.totalRevenue / 100000).toFixed(2)}L`, sub: '↑ 18% vs last month', color: 'text-green-600' },
    { label: 'Total Orders', value: adminStats.totalOrders.toLocaleString(), sub: `${adminStats.pendingOrders} pending`, color: 'text-blue-600' },
    { label: 'Customers', value: adminStats.totalCustomers.toLocaleString(), sub: `+${adminStats.newCustomers} this month`, color: 'text-purple-600' },
    { label: 'Products', value: adminStats.totalProducts.toLocaleString(), sub: `${adminStats.lowStock} low stock`, color: 'text-[#C9A96E]' },
];

const PIE_COLORS = ['#C9A96E', '#1a1a1a', '#A07840', '#E6C97F', '#6b6b6b', '#d4b896'];

export default function AdminDashboardOverview() {
    return (
        <div>
            <div className="mb-8">
                <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-2">Analytics</p>
                <h1 className="font-serif text-3xl font-light">Dashboard Overview</h1>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="bg-white border border-gray-100 p-6 hover:shadow-lg transition-shadow"
                    >
                        <p className="font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-2">{s.label}</p>
                        <p className="font-serif text-2xl md:text-3xl mb-1">{s.value}</p>
                        <p className={`font-sans-luxury text-[10px] ${s.color}`}>{s.sub}</p>
                    </motion.div>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Revenue chart — 2/3 width */}
                <div className="lg:col-span-2 bg-white border border-gray-100 p-6">
                    <h2 className="font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-6">Revenue (Monthly)</h2>
                    <ResponsiveContainer width="100%" height={240}>
                        <AreaChart data={revenueData}>
                            <defs>
                                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#C9A96E" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#C9A96E" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f3f3f3" />
                            <XAxis dataKey="month" tick={{ fontFamily: 'Montserrat', fontSize: 10 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fontFamily: 'Montserrat', fontSize: 10 }} axisLine={false} tickLine={false}
                                tickFormatter={v => `₹${(v / 1000).toFixed(0)}k`} />
                            <Tooltip formatter={v => [`₹${v.toLocaleString('en-IN')}`, 'Revenue']}
                                contentStyle={{ fontFamily: 'Montserrat', fontSize: 11, border: '1px solid #f3f3f3' }} />
                            <Area type="monotone" dataKey="revenue" stroke="#C9A96E" fill="url(#goldGrad)" strokeWidth={2} dot={{ fill: '#C9A96E', r: 4 }} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Sales by category pie — 1/3 width */}
                <div className="bg-white border border-gray-100 p-6">
                    <h2 className="font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-6">Sales by Category</h2>
                    <ResponsiveContainer width="100%" height={180}>
                        <PieChart>
                            <Pie data={salesData} cx="50%" cy="50%" outerRadius={70} dataKey="sales" nameKey="category">
                                {salesData.map((_, i) => (
                                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ fontFamily: 'Montserrat', fontSize: 11 }} />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="grid grid-cols-2 gap-1 mt-2">
                        {salesData.map((s, i) => (
                            <div key={s.category} className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: PIE_COLORS[i] }} />
                                <span className="font-sans-luxury text-[9px] text-gray-500 truncate">{s.category}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white border border-gray-100">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-gray-400">Recent Orders</h2>
                    <Link to="/admin/orders" className="font-sans-luxury text-[10px] text-[#C9A96E] tracking-widest uppercase hover:underline">View All →</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-50">
                                {['Order ID', 'Customer', 'Date', 'Total', 'Status', 'Action'].map(h => (
                                    <th key={h} className="text-left px-6 py-3 font-sans-luxury text-[9px] tracking-[0.3em] uppercase text-gray-400">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(o => (
                                <tr key={o.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-sans-luxury text-xs text-[#C9A96E]">{o.id}</td>
                                    <td className="px-6 py-4 font-sans-luxury text-xs text-gray-600">Priya Sharma</td>
                                    <td className="px-6 py-4 font-sans-luxury text-xs text-gray-400">{o.date}</td>
                                    <td className="px-6 py-4 font-serif text-sm">₹{o.total.toLocaleString('en-IN')}</td>
                                    <td className="px-6 py-4"><Badge status={o.status} /></td>
                                    <td className="px-6 py-4">
                                        <Link to={`/admin/orders/${o.id}`} className="font-sans-luxury text-[9px] tracking-widest uppercase text-gray-400 hover:text-[#C9A96E]">Details</Link>
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
