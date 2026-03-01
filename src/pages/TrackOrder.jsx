import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Breadcrumb from '../components/ui/Breadcrumb';
import { Input } from '../components/ui/FormInput';
import Button from '../components/ui/Button';
import { IoCubeOutline, IoLocationOutline, IoCheckmarkCircle, IoTimeOutline } from 'react-icons/io5';

const MOCK_TRACKING = {
    id: 'NAY-2024-8742',
    status: 'In Transit',
    steps: [
        { title: 'Order Placed', date: 'May 12, 10:30 AM', completed: true },
        { title: 'Quality Check', date: 'May 13, 02:15 PM', completed: true },
        { title: 'Packed & Dispatched', date: 'May 14, 09:00 AM', completed: true },
        { title: 'In Transit', date: 'May 15, 08:30 AM', current: true },
        { title: 'Out for Delivery', date: 'Expected tomorrow', future: true },
        { title: 'Delivered', date: 'Expected Wednesday', future: true },
    ]
};

export default function TrackOrder() {
    const [orderId, setOrderId] = useState('');
    const [tracking, setTracking] = useState(null);

    const handleTrack = () => {
        if (orderId) setTracking(MOCK_TRACKING);
    };

    return (
        <div className="py-12">
            <Container size="sm">
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Track Order' }]} />

                <div className="mt-10 mb-12 text-center">
                    <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-3">Live Updates</p>
                    <h1 className="font-serif text-4xl font-light mb-6">Track Your Order</h1>
                    <p className="font-sans-luxury text-sm text-gray-500 max-w-md mx-auto mb-8">
                        Enter your order ID or tracking number from your confirmation email to see your delivery progress.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                        <div className="flex-1">
                            <Input
                                placeholder="Ex. NAY-2024-8742"
                                value={orderId}
                                onChange={e => setOrderId(e.target.value)}
                            />
                        </div>
                        <Button variant="primary" onClick={handleTrack}>Track</Button>
                    </div>
                </div>

                {tracking && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white border border-gray-100 p-8 md:p-12"
                    >
                        <div className="flex justify-between items-start mb-12 border-b border-gray-50 pb-8">
                            <div>
                                <p className="font-sans-luxury text-[10px] tracking-widest uppercase text-gray-400 mb-1">Order ID</p>
                                <p className="font-serif text-xl">{tracking.id}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-sans-luxury text-[10px] tracking-widest uppercase text-gray-400 mb-1">Current Status</p>
                                <span className="font-sans-luxury text-sm text-[#C9A96E] font-bold tracking-widest uppercase">{tracking.status}</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-0">
                            {tracking.steps.map((step, i) => (
                                <div key={i} className="flex gap-6 min-h-[80px]">
                                    <div className="flex flex-col items-center">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${step.completed ? 'bg-green-500 text-white' :
                                                step.current ? 'bg-[#C9A96E] text-white ring-4 ring-[#C9A96E]/10' :
                                                    'bg-gray-100 text-gray-300'
                                            }`}>
                                            {step.completed ? <IoCheckmarkCircle size={18} /> :
                                                step.current ? <IoTimeOutline size={18} /> :
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />}
                                        </div>
                                        {i < tracking.steps.length - 1 && (
                                            <div className={`w-[1px] flex-1 ${step.completed ? 'bg-green-500' : 'bg-gray-100'}`} />
                                        )}
                                    </div>
                                    <div className="pb-8">
                                        <p className={`font-sans-luxury text-xs tracking-widest uppercase font-bold mb-1 ${step.future ? 'text-gray-300' : 'text-[#1a1a1a]'
                                            }`}>
                                            {step.title}
                                        </p>
                                        <p className="font-sans-luxury text-[10px] text-gray-400">{step.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </Container>
        </div>
    );
}
