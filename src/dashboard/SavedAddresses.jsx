import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { IoAddOutline, IoLocationOutline, IoEllipsisVertical } from 'react-icons/io5';

const ADDRESSES = [
    { id: 1, type: 'Home', name: 'Priya Sharma', addr: '123, Park Avenue, Apartment 4B', city: 'Mumbai', state: 'Maharashtra', pin: '400001', phone: '+91 98765 43210', isDefault: true },
    { id: 2, type: 'Office', name: 'Priya Sharma', addr: 'Boutique Center, Suite 101, Business Bay', city: 'Mumbai', state: 'Maharashtra', pin: '400013', phone: '+91 98765 00000', isDefault: false },
];

export default function SavedAddresses() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
        >
            <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-2">My Address Book</p>
                    <h1 className="font-serif text-3xl font-light">Saved Addresses</h1>
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <IoAddOutline size={18} /> Add New Address
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ADDRESSES.map((a) => (
                    <div key={a.id} className={`p-6 bg-white border ${a.isDefault ? 'border-[#C9A96E]' : 'border-gray-100'} relative`}>
                        {a.isDefault && (
                            <span className="absolute top-4 right-4 bg-[#C9A96E] text-white text-[8px] tracking-[0.2em] uppercase px-2 py-0.5">Default</span>
                        )}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                                <IoLocationOutline size={16} />
                            </div>
                            <span className="font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a] font-bold">{a.type}</span>
                        </div>
                        <p className="font-sans-luxury text-xs font-semibold text-gray-900 mb-1">{a.name}</p>
                        <p className="font-sans-luxury text-xs text-gray-500 leading-relaxed mb-4">
                            {a.addr},<br />
                            {a.city}, {a.state} – {a.pin}<br />
                            Phone: {a.phone}
                        </p>
                        <div className="flex gap-4 pt-4 border-t border-gray-50">
                            <button className="font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-gray-400 hover:text-[#C9A96E] transition-colors">Edit</button>
                            <button className="font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-gray-400 hover:text-red-500 transition-colors">Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
