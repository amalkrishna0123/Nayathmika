import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '../components/ui/FormInput';
import Button from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';

export default function ProfileSettings() {
    const { toast } = useToast();
    const [form, setForm] = useState({
        firstName: 'Priya',
        lastName: 'Sharma',
        email: 'priya@example.com',
        phone: '+91 98765 43210',
        dob: '1995-08-15'
    });

    const handleSave = (e) => {
        e.preventDefault();
        toast('Profile updated successfully! ✨', 'success');
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
        >
            <div className="mb-8">
                <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-2">Settings</p>
                <h1 className="font-serif text-3xl font-light">Profile Details</h1>
            </div>

            <div className="bg-white border border-gray-100 p-8 max-w-2xl">
                <form onSubmit={handleSave} className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <Input
                                label="First Name"
                                value={form.firstName}
                                onChange={e => setForm({ ...form, firstName: e.target.value })}
                            />
                        </div>
                        <div className="flex-1">
                            <Input
                                label="Last Name"
                                value={form.lastName}
                                onChange={e => setForm({ ...form, lastName: e.target.value })}
                            />
                        </div>
                    </div>

                    <Input
                        label="Email Address"
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        disabled
                    />
                    <p className="text-[10px] font-sans-luxury text-gray-400 -mt-4">Email cannot be changed. Please contact support to update your email.</p>

                    <Input
                        label="Phone Number"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                    />

                    <Input
                        label="Date of Birth"
                        type="date"
                        value={form.dob}
                        onChange={e => setForm({ ...form, dob: e.target.value })}
                    />

                    <div className="pt-4">
                        <Button type="submit" variant="primary" size="lg">Save Changes</Button>
                    </div>
                </form>
            </div>

            <div className="mt-12 bg-red-50/30 border border-red-100 p-8 max-w-2xl">
                <h3 className="font-serif text-xl mb-2 text-red-900">Danger Zone</h3>
                <p className="font-sans-luxury text-sm text-red-600/70 mb-6">Once you delete your account, there is no going back. Please be certain.</p>
                <Button variant="ghost" className="text-red-600 border-red-200 hover:bg-red-50">Delete Account</Button>
            </div>
        </motion.div>
    );
}
