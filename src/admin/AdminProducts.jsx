import { motion } from 'framer-motion';
import { products } from '../data/products';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { IoAddOutline, IoSearchOutline, IoFilterOutline } from 'react-icons/io5';

export default function AdminProducts() {
    return (
        <div>
            <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-2">Inventory</p>
                    <h1 className="font-serif text-3xl font-light text-gray-900">All Products</h1>
                </div>
                <Button variant="primary" className="flex items-center gap-2">
                    <IoAddOutline size={18} /> Add New Product
                </Button>
            </div>

            {/* Filters & Search */}
            <div className="bg-white border border-gray-100 p-4 mb-6 flex flex-wrap gap-4 items-center">
                <div className="flex-1 min-w-[200px] relative">
                    <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border-transparent focus:bg-white focus:border-[#C9A96E] outline-none transition-all font-sans-luxury text-xs lowercase tracking-wider"
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 py-2">
                        <IoFilterOutline size={14} /> Filter
                    </Button>
                    <select className="bg-gray-50 px-4 py-2 font-sans-luxury text-[10px] tracking-widest uppercase outline-none focus:border-[#C9A96E] border-transparent border">
                        <option>Category: All</option>
                        <option>Rings</option>
                        <option>Necklaces</option>
                    </select>
                </div>
            </div>

            {/* Grid */}
            <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 font-sans-luxury text-[9px] tracking-[0.3em] uppercase text-gray-400">
                                <th className="px-6 py-4 font-medium">Product</th>
                                <th className="px-6 py-4 font-medium">Category</th>
                                <th className="px-6 py-4 font-medium">SKU</th>
                                <th className="px-6 py-4 font-medium">Stock</th>
                                <th className="px-6 py-4 font-medium">Price</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {products.map((p, i) => (
                                <motion.tr
                                    key={p.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img src={p.image} alt="" className="w-10 h-10 object-cover bg-gray-100" />
                                            <div>
                                                <p className="font-sans-luxury text-xs font-semibold text-gray-900">{p.name}</p>
                                                <p className="font-sans-luxury text-[10px] text-gray-400">{p.metal}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-xs font-sans-luxury text-gray-500 uppercase tracking-widest">{p.category}</td>
                                    <td className="px-6 py-4 text-xs font-sans-luxury text-gray-400">NY-PRD-{p.id}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs font-sans-luxury ${p.stock < 10 ? 'text-red-500' : 'text-gray-600'}`}>
                                            {p.stock} units
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-xs font-serif font-semibold text-gray-900">₹{p.price.toLocaleString('en-IN')}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-3 text-[10px] tracking-[0.3em] uppercase font-bold text-gray-300">
                                            <button className="hover:text-[#C9A96E] transition-colors">Edit</button>
                                            <button className="hover:text-red-500 transition-colors">Delete</button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
