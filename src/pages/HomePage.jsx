import HeroBanner from '../sections/HeroBanner';
import OfferBannersSection from '../sections/OfferBannersSection';
import CategorySection from '../sections/CategorySection';
import FeaturedProducts from '../sections/FeaturedProducts';
import TestimonialsSection from '../sections/TestimonialsSection';
import NewsletterSection from '../sections/NewsletterSection';
import WhyChooseUs from '../sections/WhyChooseUs';
import PremiumCollectionBanner from '../sections/PremiumCollectionBanner';

export default function HomePage() {
    return (
        <>
            <HeroBanner />
            <OfferBannersSection />
            <CategorySection />
            <FeaturedProducts />
            <PremiumCollectionBanner />
            <WhyChooseUs />
            <TestimonialsSection />
            <NewsletterSection />
        </>
    );
}
