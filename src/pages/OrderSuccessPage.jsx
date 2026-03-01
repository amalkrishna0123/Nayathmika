import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function OrderSuccessPage() {
    const orderId = `NAY-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`;

    return (
        <div className="min-h-[80vh] flex items-center justify-center py-20">
            <Container size="sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    {/* Animated checkmark */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                        className="w-24 h-24 rounded-full border-2 border-[#C9A96E] flex items-center justify-center mx-auto mb-8"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-4xl text-[#C9A96E]"
                        >
                            ✓
                        </motion.span>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-3">Order Confirmed</p>
                        <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Thank You!</h1>
                        <p className="font-sans-luxury text-sm text-gray-500 leading-relaxed mb-2">
                            Your order has been placed successfully. We'll send you a confirmation email shortly.
                        </p>
                        <p className="font-sans-luxury text-lg text-[#1a1a1a] font-medium mb-2">{orderId}</p>
                        <p className="font-sans-luxury text-xs text-gray-400 mb-10">Estimated delivery: 5–7 business days</p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/dashboard/orders"><Button variant="primary" size="lg">Track Order</Button></Link>
                            <Link to="/shop"><Button variant="outline" size="lg">Continue Shopping</Button></Link>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    );
}
