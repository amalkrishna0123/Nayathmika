import { useState } from 'react';

// Simple cart state management via localStorage
const CART_KEY = 'nayathmika_cart';

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    } catch {
        return [];
    }
}

export function useCart() {
    const [cart, setCart] = useState(getCart());

    const addToCart = (product, qty = 1, options = {}) => {
        const updated = [...cart];
        const idx = updated.findIndex(i => i.id === product.id && JSON.stringify(i.options) === JSON.stringify(options));
        if (idx >= 0) {
            updated[idx].qty += qty;
        } else {
            updated.push({ ...product, qty, options });
        }
        setCart(updated);
        localStorage.setItem(CART_KEY, JSON.stringify(updated));
    };

    const removeFromCart = (id, options = {}) => {
        const updated = cart.filter(i => !(i.id === id && JSON.stringify(i.options) === JSON.stringify(options)));
        setCart(updated);
        localStorage.setItem(CART_KEY, JSON.stringify(updated));
    };

    const updateQty = (id, qty) => {
        const updated = cart.map(i => i.id === id ? { ...i, qty } : i);
        setCart(updated);
        localStorage.setItem(CART_KEY, JSON.stringify(updated));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem(CART_KEY);
    };

    const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

    return { cart, addToCart, removeFromCart, updateQty, clearCart, cartTotal, cartCount };
}
