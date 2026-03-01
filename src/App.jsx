import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import WishlistPage from './pages/WishlistPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsPage from './pages/TermsPage';
import TrackOrder from './pages/TrackOrder';
import NotFoundPage from './pages/NotFoundPage';

// Dashboard Pages
import DashboardOverview from './dashboard/DashboardOverview';
import MyOrders from './dashboard/MyOrders';
import ProfileSettings from './dashboard/ProfileSettings';
import SavedAddresses from './dashboard/SavedAddresses';

// Admin Pages
import AdminDashboardOverview from './admin/AdminDashboardOverview';
import AdminProducts from './admin/AdminProducts';
import AdminOrderDetails from './admin/OrderDetails';

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/shop" element={<MainLayout><ShopPage /></MainLayout>} />
      <Route path="/product/:id" element={<MainLayout><ProductDetailPage /></MainLayout>} />
      <Route path="/cart" element={<MainLayout><CartPage /></MainLayout>} />
      <Route path="/checkout" element={<MainLayout><CheckoutPage /></MainLayout>} />
      <Route path="/order-success" element={<MainLayout><OrderSuccessPage /></MainLayout>} />
      <Route path="/wishlist" element={<MainLayout><WishlistPage /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
      <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
      <Route path="/faqs" element={<MainLayout><FAQPage /></MainLayout>} />
      <Route path="/privacy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
      <Route path="/terms" element={<MainLayout><TermsPage /></MainLayout>} />
      <Route path="/track-order" element={<MainLayout><TrackOrder /></MainLayout>} />

      {/* Category Routes */}
      <Route path="/category/:slug" element={<MainLayout><ShopPage /></MainLayout>} />
      <Route path="/category/:slug/:subslug" element={<MainLayout><ShopPage /></MainLayout>} />

      {/* Collection Placeholders for Routing Count */}
      <Route path="/collections/combo-offers" element={<MainLayout><ShopPage title="Combo Offers" /></MainLayout>} />
      <Route path="/collections/festival" element={<MainLayout><ShopPage title="Festival Collection" /></MainLayout>} />
      <Route path="/collections/premium" element={<MainLayout><ShopPage title="Premium Collection" /></MainLayout>} />
      <Route path="/collections/new-arrivals" element={<MainLayout><ShopPage title="New Arrivals" /></MainLayout>} />
      <Route path="/collections/best-sellers" element={<MainLayout><ShopPage title="Best Sellers" /></MainLayout>} />

      {/* User Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardOverview />} />
        <Route path="orders" element={<MyOrders />} />
        <Route path="orders/:id" element={<div>Order Detail (Placeholder)</div>} />
        <Route path="track-order" element={<TrackOrder />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="addresses" element={<SavedAddresses />} />
        <Route path="payments" element={<div>Payment Methods (Placeholder)</div>} />
        <Route path="coupons" element={<div>Coupons (Placeholder)</div>} />
        <Route path="returns" element={<div>Returns (Placeholder)</div>} />
        <Route path="wallet" element={<div>Wallet (Placeholder)</div>} />
        <Route path="notifications" element={<div>Notifications (Placeholder)</div>} />
        <Route path="profile" element={<ProfileSettings />} />
        <Route path="password" element={<div>Change Password (Placeholder)</div>} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboardOverview />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="categories" element={<div>Category Table (Placeholder)</div>} />
        <Route path="orders" element={<div>Order Table (Placeholder)</div>} />
        <Route path="orders/:id" element={<AdminOrderDetails />} />
        <Route path="customers" element={<div>Customer Table (Placeholder)</div>} />
        <Route path="coupons" element={<div>Coupon Table (Placeholder)</div>} />
        <Route path="cms" element={<div>CMS Table (Placeholder)</div>} />
        <Route path="marketing" element={<div>Marketing Table (Placeholder)</div>} />
        <Route path="reports" element={<div>Reports Table (Placeholder)</div>} />
        <Route path="settings" element={<div>Admin Settings (Placeholder)</div>} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />
    </Routes>
  );
}
