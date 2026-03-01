import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoTrashOutline } from 'react-icons/io5';
import Container from '../components/ui/Container';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import { useCart } from '../hooks/useCart';
import { useToast } from '../components/ui/Toast';

export default function CartPage() {
    const { cart, removeFromCart, updateQty, cartTotal, clearCart } = useCart();
    const { toast } = useToast();

    if (cart.length === 0) {
        return (
            <div className="py-24 text-center">
                <Container size="sm">
                    <p className="font-serif text-5xl mb-4 text-gray-100">✦</p>
                    <h2 className="font-serif text-3xl font-light mb-4">Your Bag is Empty</h2>
                    <p className="font-sans-luxury text-sm text-gray-400 mb-8">Discover our exquisite collection and find something you'll love.</p>
                    <Link to="/shop"><Button variant="primary" size="lg">Explore Jewellery</Button></Link>
                </Container>
            </div>
        );
    }

    return (
        <div className="py-12">
            <Container>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Cart' }]} />
                <h1 className="font-serif text-4xl font-light mt-8 mb-10">Shopping Bag</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart items */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {cart.map((item, i) => (
                            <motion.div
                                key={`${item.id}-${i}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex gap-6 border-b border-gray-100 pb-6"
                            >
                                <Link to={`/product/${item.id}`}>
                                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover bg-[#F9F4EC]" />
                                </Link>
                                <div className="flex-1">
                                    <p className="font-sans-luxury text-[10px] tracking-widest uppercase text-[#C9A96E] mb-1">{item.category}</p>
                                    <Link to={`/product/${item.id}`}>
                                        <h3 className="font-serif text-lg hover:text-[#C9A96E] transition-colors">{item.name}</h3>
                                    </Link>
                                    {item.options?.variant && (
                                        <p className="font-sans-luxury text-xs text-gray-400 mt-1">{item.options.variant}</p>
                                    )}
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center border border-gray-200">
                                            <button onClick={() => { if (item.qty > 1) updateQty(item.id, item.qty - 1); }} className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 text-sm">−</button>
                                            <span className="w-8 text-center font-sans-luxury text-sm">{item.qty}</span>
                                            <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 text-sm">+</button>
                                        </div>
                                        <span className="font-serif text-lg">₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
                                        <button
                                            onClick={() => { removeFromCart(item.id); toast('Removed from cart', 'info'); }}
                                            className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                        >
                                            <IoTrashOutline size={18} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Order summary */}
                    <div className="bg-[#FDFAF5] p-8 h-fit">
                        <h3 className="font-sans-luxury text-xs tracking-[0.4em] uppercase mb-6">Order Summary</h3>
                        <div className="flex flex-col gap-3 mb-6 font-sans-luxury text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Subtotal</span>
                                <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Shipping</span>
                                <span className="text-green-600">{cartTotal >= 25000 ? 'Free' : '₹299'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Tax (3% GST)</span>
                                <span>₹{Math.round(cartTotal * 0.03).toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 pt-4 mb-6 flex justify-between font-serif text-xl">
                            <span>Total</span>
                            <span>₹{(cartTotal + Math.round(cartTotal * 0.03) + (cartTotal >= 25000 ? 0 : 299)).toLocaleString('en-IN')}</span>
                        </div>
                        <Link to="/checkout">
                            <Button variant="primary" size="lg" fullWidth>Proceed to Checkout</Button>
                        </Link>
                        <div className="mt-4">
                            <input
                                placeholder="Coupon code"
                                className="w-full px-4 py-3 border border-gray-200 font-sans-luxury text-sm outline-none focus:border-[#C9A96E] bg-white mt-3"
                            />
                            <Button variant="outline" size="sm" fullWidth className="mt-2">Apply Coupon</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
