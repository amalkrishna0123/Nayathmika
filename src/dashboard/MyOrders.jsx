import { motion } from 'framer-motion';
import { orders } from '../data/orders';
import Badge from '../components/ui/Badge';
import { Link } from 'react-router-dom';

export default function MyOrders() {
    return (
        <div>
            <div className="mb-8">
                <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-2">Order History</p>
                <h1 className="font-serif text-3xl font-light">My Orders</h1>
            </div>

            <div className="bg-white border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                {['Order ID', 'Date', 'Total', 'Status', 'Actions'].map(h => (
                                    <th key={h} className="px-6 py-4 text-left font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-gray-400">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, i) => (
                                <motion.tr
                                    key={order.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="border-b border-gray-50 hover:bg-[#FDFAF5] transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <span className="font-sans-luxury text-xs text-[#C9A96E]">{order.id}</span>
                                    </td>
                                    <td className="px-6 py-4 font-sans-luxury text-xs text-gray-500">
                                        {order.date}
                                    </td>
                                    <td className="px-6 py-4 font-serif text-sm">
                                        ₹{order.total.toLocaleString('en-IN')}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Badge status={order.status} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link
                                            to={`/dashboard/orders/${order.id}`}
                                            className="font-sans-luxury text-[10px] tracking-[0.4em] uppercase text-gray-400 hover:text-[#C9A96E] transition-colors"
                                        >
                                            Details →
                                        </Link>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {orders.length === 0 && (
                <div className="text-center py-20 bg-white border border-gray-100 mt-6">
                    <p className="font-sans-luxury text-sm text-gray-400">You haven't placed any orders yet.</p>
                    <Link to="/shop" className="inline-block mt-4 text-[#C9A96E] uppercase tracking-widest text-xs font-medium border-b border-[#C9A96E] pb-1">
                        Start Shopping
                    </Link>
                </div>
            )}
        </div>
    );
}
