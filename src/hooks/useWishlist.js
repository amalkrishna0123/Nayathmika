import { useState } from 'react';

const WISHLIST_KEY = 'nayathmika_wishlist';

function getWishlist() {
    try {
        return JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
    } catch {
        return [];
    }
}

export function useWishlist() {
    const [wishlist, setWishlist] = useState(getWishlist());

    const toggleWishlist = (product) => {
        const updated = wishlist.some(i => i.id === product.id)
            ? wishlist.filter(i => i.id !== product.id)
            : [...wishlist, product];
        setWishlist(updated);
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
    };

    const isWishlisted = (id) => wishlist.some(i => i.id === id);
    const wishlistCount = wishlist.length;

    return { wishlist, toggleWishlist, isWishlisted, wishlistCount };
}
