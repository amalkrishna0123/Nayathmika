import Container from '../components/ui/Container';
import Breadcrumb from '../components/ui/Breadcrumb';

export default function TermsOfService() {
    return (
        <div className="py-12">
            <Container size="sm">
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} />
                <div className="mt-10">
                    <h1 className="font-serif text-4xl font-light mb-10">Terms of Service</h1>

                    <div className="prose prose-sm font-sans-luxury text-gray-500 leading-relaxed max-w-none">
                        <p className="italic mb-10">Last updated: May 15, 2024</p>

                        <section className="mb-10">
                            <h2 className="text-[#1a1a1a] text-xs tracking-[0.3em] uppercase mb-4">1. Introduction</h2>
                            <p className="mb-4">Welcome to Nayathmika. These terms and conditions outline the rules and regulations for the use of Nayathmika's Website and services.</p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-[#1a1a1a] text-xs tracking-[0.3em] uppercase mb-4">2. Intellectual Property</h2>
                            <p className="mb-4">Other than the content you own, under these Terms, Nayathmika and/or its licensors own all the intellectual property rights and materials contained in this Website. All jewellery designs are proprietary.</p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-[#1a1a1a] text-xs tracking-[0.3em] uppercase mb-4">3. Restrictions</h2>
                            <p className="mb-4">You are specifically restricted from all of the following: publishing any Website material in any other media; selling, sublicensing and/or otherwise commercializing any Website material; publicly performing and/or showing any Website material.</p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-[#1a1a1a] text-xs tracking-[0.3em] uppercase mb-4">4. Product Pricing</h2>
                            <p className="mb-4">Prices for our products are subject to change without notice, specifically due to fluctuations in gold and diamond market rates. We reserve the right at any time to modify or discontinue the Service without notice.</p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
}
