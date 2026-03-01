import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoCallOutline, IoMailOutline, IoLocationOutline, IoTimeOutline } from 'react-icons/io5';
import Container from '../components/ui/Container';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import { Input, Textarea } from '../components/ui/FormInput';
import { useToast } from '../components/ui/Toast';

export default function ContactPage() {
    const { toast } = useToast();
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        toast('Message sent! We will get back to you soon. ✨', 'success');
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="py-12">
            <Container>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} />

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-3">Get in Touch</p>
                        <h1 className="font-serif text-4xl md:text-5xl font-light mb-6">We'd love to hear<br />from you</h1>
                        <p className="font-sans-luxury text-sm text-gray-500 leading-relaxed mb-10 max-w-md">
                            Whether you have a question about our collections, need help with an order, or want to discuss a custom design, our experts are here to help.
                        </p>

                        <div className="flex flex-col gap-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] flex-shrink-0">
                                    <IoCallOutline size={20} />
                                </div>
                                <div>
                                    <p className="font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-1">Phone</p>
                                    <p className="font-sans-luxury text-sm text-gray-800">+91 98765 43210</p>
                                    <p className="font-sans-luxury text-sm text-gray-800">+91 22 2345 6789</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] flex-shrink-0">
                                    <IoMailOutline size={20} />
                                </div>
                                <div>
                                    <p className="font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-1">Email</p>
                                    <p className="font-sans-luxury text-sm text-gray-800">contact@nayathmika.com</p>
                                    <p className="font-sans-luxury text-sm text-gray-800">support@nayathmika.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] flex-shrink-0">
                                    <IoLocationOutline size={20} />
                                </div>
                                <div>
                                    <p className="font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-1">Boutique</p>
                                    <p className="font-sans-luxury text-sm text-gray-800 leading-relaxed">
                                        123, Luxury Row, Park Street<br />Mumbai, Maharashtra 400001
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] flex-shrink-0">
                                    <IoTimeOutline size={20} />
                                </div>
                                <div>
                                    <p className="font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-1">Boutique Hours</p>
                                    <p className="font-sans-luxury text-sm text-gray-800">Mon – Sat: 11:00 AM – 8:00 PM</p>
                                    <p className="font-sans-luxury text-sm text-gray-800">Sun: 11:00 AM – 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#FDFAF5] p-8 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <Input
                                label="Full Name"
                                placeholder="Ex. Priya Sharma"
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                required
                            />
                            <Input
                                label="Email Address"
                                type="email"
                                placeholder="Ex. priya@example.com"
                                value={form.email}
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                required
                            />
                            <Input
                                label="Subject"
                                placeholder="Ex. Custom Design Inquiry"
                                value={form.subject}
                                onChange={e => setForm({ ...form, subject: e.target.value })}
                                required
                            />
                            <Textarea
                                label="Message"
                                placeholder="How can we help you?"
                                rows={5}
                                value={form.message}
                                onChange={e => setForm({ ...form, message: e.target.value })}
                                required
                            />
                            <Button type="submit" variant="primary" size="lg" fullWidth>
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
