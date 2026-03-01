import Container from '../components/ui/Container';
import Breadcrumb from '../components/ui/Breadcrumb';

export default function PrivacyPolicy() {
    return (
        <div className="py-12">
            <Container size="sm">
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
                <div className="mt-10">
                    <h1 className="font-serif text-4xl font-light mb-10">Privacy Policy</h1>

                    <div className="prose prose-sm font-sans-luxury text-gray-500 leading-relaxed max-w-none">
                        <section className="mb-10">
                            <h2 className="text-[#1a1a1a] text-xs tracking-[0.3em] uppercase mb-4">1. Collection of Information</h2>
                            <p className="mb-4">At Nayathmika, we are committed to protecting your privacy. We collect personal information such as your name, email, billing address, and phone number when you make a purchase or register an account.</p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-[#1a1a1a] text-xs tracking-[0.3em] uppercase mb-4">2. Use of Data</h2>
                            <p className="mb-4">The information we collect is used to process your orders, provide customer support, and send you updates about our collections (only if you opt-in). We never sell your personal data to third parties.</p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-[#1a1a1a] text-xs tracking-[0.3em] uppercase mb-4">3. Security</h2>
                            <p className="mb-4">We implement a variety of security measures to maintain the safety of your personal information. Your sensitive data (like credit card info) is encrypted via Secure Socket Layer (SSL) technology.</p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-[#1a1a1a] text-xs tracking-[0.3em] uppercase mb-4">4. Cookies</h2>
                            <p className="mb-4">We use cookies to enhance your experience on our site, such as remembering items in your shopping bag and analyzing traffic to improve our boutique's performance.</p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
}
