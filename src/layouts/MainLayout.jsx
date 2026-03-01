import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AnimatedPage from '../components/layout/AnimatedPage';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';

export default function MainLayout({ children }) {
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar cartCount={cartCount} wishlistCount={wishlistCount} />
            <main className="flex-1">
                <AnimatedPage>{children}</AnimatedPage>
            </main>
            <Footer />
        </div>
    );
}
