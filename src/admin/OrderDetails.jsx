import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoArrowBackOutline, IoPrintOutline, IoMailOutline } from 'react-icons/io5';
import { orders } from '../data/orders';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

export default function AdminOrderDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const order = orders.find(o => o.id === id) || orders[0];

    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 font-sans-luxury text-[10px] tracking-widest uppercase text-gray-400 hover:text-[#C9A96E] transition-colors"
                >
                    <IoArrowBackOutline size={16} /> Back to Orders
                </button>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2"><IoPrintOutline size={14} /> Print Invoice</Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2"><IoMailOutline size={14} /> Resend Email</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Items and Timeline */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                    {/* Summary */}
                    <div className="bg-white border border-gray-100 p-8">
                        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                            <div>
                                <h1 className="font-serif text-3xl font-light mb-1">Order {order.id}</h1>
                                <p className="font-sans-luxury text-[10px] tracking-widest uppercase text-gray-400">Placed on {order.date}</p>
                            </div>
                            <div className="text-left md:text-right">
                                <Badge status={order.status} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            {order.items.map((item, i) => (
                                <div key={i} className="flex gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                                    <img src={item.image} alt="" className="w-16 h-16 object-cover bg-gray-50" />
                                    <div className="flex-1">
                                        <p className="font-sans-luxury text-sm font-semibold text-gray-900">{item.name}</p>
                                        <p className="font-sans-luxury text-[10px] text-gray-400 uppercase tracking-widest">SKU: NY-7241 | QTY: {item.qty}</p>
                                    </div>
                                    <p className="font-serif text-sm">₹{item.price.toLocaleString('en-IN')}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                                <p className="font-sans-luxury text-[10px] tracking-widest uppercase text-gray-400 mb-1">Payment</p>
                                <p className="font-sans-luxury text-[11px] text-gray-700">UPI (Completed)</p>
                            </div>
                            <div>
                                <p className="font-sans-luxury text-[10px] tracking-widest uppercase text-gray-400 mb-1">Shipping</p>
                                <p className="font-sans-luxury text-[11px] text-gray-700">Bluedart Express</p>
                            </div>
                            <div>
                                <p className="font-sans-luxury text-[10px] tracking-widest uppercase text-gray-400 mb-1">Subtotal</p>
                                <p className="font-sans-luxury text-[11px] text-gray-700">₹{order.total.toLocaleString('en-IN')}</p>
                            </div>
                            <div>
                                <p className="font-sans-luxury text-[10px] tracking-widest uppercase text-gray-400 mb-1">Grand Total</p>
                                <p className="font-serif text-lg font-bold">₹{order.total.toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Customer Info */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white border border-gray-100 p-8">
                        <h2 className="font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-6">Customer Notes</h2>
                        <p className="font-sans-luxury text-xs text-gray-500 italic leading-relaxed">
                            "Please gift wrap this. It's an anniversary present for my wife."
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 p-8">
                        <h2 className="font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a] mb-6 font-bold">Shipping Address</h2>
                        <p className="font-sans-luxury text-xs text-gray-500 leading-relaxed font-semibold">Priya Sharma</p>
                        <p className="font-sans-luxury text-xs text-gray-400 leading-relaxed">
                            123, Park Avenue, Apt 4B<br />
                            Mumbai, Maharashtra - 400001<br />
                            Phone: +91 98765 43210
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
