import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../components/ui/Container';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import { Input, Select } from '../components/ui/FormInput';
import { useCart } from '../hooks/useCart';
import { IoCheckmarkCircle } from 'react-icons/io5';

const STEPS = ['Shipping', 'Payment', 'Review'];

const STATES = [
    { value: '', label: 'Select State' },
    { value: 'MH', label: 'Maharashtra' },
    { value: 'KA', label: 'Karnataka' },
    { value: 'TN', label: 'Tamil Nadu' },
    { value: 'AP', label: 'Andhra Pradesh' },
    { value: 'TG', label: 'Telangana' },
    { value: 'DL', label: 'Delhi' },
    { value: 'GJ', label: 'Gujarat' },
];

export default function CheckoutPage() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({
        name: '', email: '', phone: '', address: '', city: '', state: '', pincode: '',
        payMethod: 'upi',
    });
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const tax = Math.round(cartTotal * 0.03);
    const shipping = cartTotal >= 25000 ? 0 : 299;
    const grandTotal = cartTotal + tax + shipping;

    const handleNext = () => {
        if (step < STEPS.length - 1) setStep(s => s + 1);
        else {
            clearCart();
            navigate('/order-success');
        }
    };

    return (
        <div className="py-12">
            <Container size="default">
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Cart', href: '/cart' }, { label: 'Checkout' }]} />

                {/* Step indicator */}
                <div className="flex items-center justify-center gap-0 mt-10 mb-12">
                    {STEPS.map((s, i) => (
                        <div key={s} className="flex items-center">
                            <div className={`flex items-center gap-2 font-sans-luxury text-xs tracking-widest uppercase px-4 py-2 transition-all ${i === step ? 'text-[#C9A96E]' : i < step ? 'text-green-500' : 'text-gray-300'
                                }`}>
                                {i < step ? (
                                    <IoCheckmarkCircle size={16} />
                                ) : (
                                    <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ${i === step ? 'border-[#C9A96E] text-[#C9A96E]' : 'border-gray-200 text-gray-300'
                                        }`}>{i + 1}</span>
                                )}
                                {s}
                            </div>
                            {i < STEPS.length - 1 && <div className={`h-[1px] w-12 ${i < step ? 'bg-green-300' : 'bg-gray-100'}`} />}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Form area */}
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-2"
                    >
                        {/* Step 0: Shipping */}
                        {step === 0 && (
                            <div className="flex flex-col gap-5">
                                <h2 className="font-serif text-2xl font-light">Shipping Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input label="Full Name" id="name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Priya Sharma" />
                                    <Input label="Email" id="email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@example.com" />
                                    <Input label="Phone" id="phone" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+91 98765 43210" />
                                    <Input label="Pincode" id="pincode" value={form.pincode} onChange={e => setForm(f => ({ ...f, pincode: e.target.value }))} placeholder="400001" />
                                </div>
                                <Input label="Address" id="address" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} placeholder="123, Park Street" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input label="City" id="city" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} placeholder="Mumbai" />
                                    <Select label="State" id="state" options={STATES} value={form.state} onChange={e => setForm(f => ({ ...f, state: e.target.value }))} />
                                </div>
                            </div>
                        )}

                        {/* Step 1: Payment */}
                        {step === 1 && (
                            <div className="flex flex-col gap-5">
                                <h2 className="font-serif text-2xl font-light">Payment Method</h2>
                                {[
                                    { value: 'upi', label: 'UPI / Google Pay / PhonePe' },
                                    { value: 'card', label: 'Credit / Debit Card' },
                                    { value: 'netbanking', label: 'Net Banking' },
                                    { value: 'cod', label: 'Cash on Delivery' },
                                ].map(opt => (
                                    <label key={opt.value} className={`flex items-center gap-4 p-5 border cursor-pointer transition-all ${form.payMethod === opt.value ? 'border-[#C9A96E] bg-[#C9A96E]/5' : 'border-gray-100 hover:border-gray-200'
                                        }`}>
                                        <input
                                            type="radio"
                                            name="payMethod"
                                            value={opt.value}
                                            checked={form.payMethod === opt.value}
                                            onChange={() => setForm(f => ({ ...f, payMethod: opt.value }))}
                                            className="accent-[#C9A96E]"
                                        />
                                        <span className="font-sans-luxury text-sm tracking-wider">{opt.label}</span>
                                    </label>
                                ))}
                                {form.payMethod === 'card' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <Input label="Card Number" id="cardNum" placeholder="1234 5678 9012 3456" />
                                        <Input label="Name on Card" id="cardName" placeholder="Priya Sharma" />
                                        <Input label="Expiry" id="expiry" placeholder="MM/YY" />
                                        <Input label="CVV" id="cvv" placeholder="•••" type="password" />
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Step 2: Review */}
                        {step === 2 && (
                            <div className="flex flex-col gap-5">
                                <h2 className="font-serif text-2xl font-light">Review Your Order</h2>
                                <div className="bg-[#FDFAF5] p-6 flex flex-col gap-4">
                                    {cart.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                                            <div className="flex-1">
                                                <p className="font-serif text-sm">{item.name}</p>
                                                <p className="font-sans-luxury text-xs text-gray-400">Qty: {item.qty}</p>
                                            </div>
                                            <span className="font-serif text-sm">₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm font-sans-luxury text-gray-500">
                                    <p><strong>Ship to:</strong> {form.name}, {form.address}, {form.city} – {form.pincode}</p>
                                    <p className="mt-1"><strong>Payment:</strong> {form.payMethod.toUpperCase()}</p>
                                </div>
                            </div>
                        )}

                        <div className="mt-8 flex justify-between">
                            {step > 0 && (
                                <Button variant="ghost" onClick={() => setStep(s => s - 1)}>← Back</Button>
                            )}
                            <Button variant="primary" size="lg" className="ml-auto" onClick={handleNext}>
                                {step === STEPS.length - 1 ? 'Place Order' : 'Continue →'}
                            </Button>
                        </div>
                    </motion.div>

                    {/* Order summary sidebar */}
                    <div className="bg-[#FDFAF5] p-8 h-fit">
                        <h3 className="font-sans-luxury text-xs tracking-[0.4em] uppercase mb-6">Summary</h3>
                        <div className="flex flex-col gap-3 mb-4 font-sans-luxury text-sm">
                            <div className="flex justify-between"><span className="text-gray-500">Subtotal</span><span>₹{cartTotal.toLocaleString('en-IN')}</span></div>
                            <div className="flex justify-between"><span className="text-gray-500">Shipping</span><span className={shipping === 0 ? 'text-green-600' : ''}>{shipping === 0 ? 'Free' : `₹${shipping}`}</span></div>
                            <div className="flex justify-between"><span className="text-gray-500">GST (3%)</span><span>₹{tax.toLocaleString('en-IN')}</span></div>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex justify-between font-serif text-xl">
                            <span>Total</span><span>₹{grandTotal.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
