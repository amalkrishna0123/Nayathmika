// Mock Categories Data
export const categories = [
    {
        id: 1,
        name: "Rings",
        slug: "rings",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&auto=format",
        count: 245,
        subcategories: [
            { id: 11, name: "Diamond Rings", slug: "diamond-rings", count: 82 },
            { id: 12, name: "Gold Rings", slug: "gold-rings", count: 65 },
            { id: 13, name: "Engagement Rings", slug: "engagement-rings", count: 48 },
            { id: 14, name: "Wedding Bands", slug: "wedding-bands", count: 30 },
            { id: 15, name: "Gemstone Rings", slug: "gemstone-rings", count: 20 },
        ],
    },
    {
        id: 2,
        name: "Necklaces",
        slug: "necklaces",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format",
        count: 312,
        subcategories: [
            { id: 21, name: "Diamond Necklaces", slug: "diamond-necklaces", count: 95 },
            { id: 22, name: "Pearl Necklaces", slug: "pearl-necklaces", count: 48 },
            { id: 23, name: "Gold Chains", slug: "gold-chains", count: 110 },
            { id: 24, name: "Kundan Necklaces", slug: "kundan-necklaces", count: 35 },
            { id: 25, name: "Temple Jewelry", slug: "temple-jewelry", count: 24 },
        ],
    },
    {
        id: 3,
        name: "Earrings",
        slug: "earrings",
        image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&auto=format",
        count: 420,
        subcategories: [
            { id: 31, name: "Studs", slug: "stud-earrings", count: 150 },
            { id: 32, name: "Drop Earrings", slug: "drop-earrings", count: 120 },
            { id: 33, name: "Jhumkas", slug: "jhumka-earrings", count: 85 },
            { id: 34, name: "Chandbali", slug: "chandbali-earrings", count: 45 },
            { id: 35, name: "Hoop Earrings", slug: "hoop-earrings", count: 20 },
        ],
    },
    {
        id: 4,
        name: "Bangles",
        slug: "bangles",
        image: "https://images.unsplash.com/photo-1573408301185-9519f94815b8?w=400&auto=format",
        count: 186,
        subcategories: [
            { id: 41, name: "Gold Bangles", slug: "gold-bangles", count: 75 },
            { id: 42, name: "Diamond Bangles", slug: "diamond-bangles", count: 45 },
            { id: 43, name: "Antique Bangles", slug: "antique-bangles", count: 38 },
            { id: 44, name: "Bangle Sets", slug: "bangle-sets", count: 28 },
        ],
    },
    {
        id: 5,
        name: "Bracelets",
        slug: "bracelets",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&auto=format",
        count: 134,
        subcategories: [
            { id: 51, name: "Tennis Bracelets", slug: "tennis-bracelets", count: 42 },
            { id: 52, name: "Charm Bracelets", slug: "charm-bracelets", count: 55 },
            { id: 53, name: "Gold Bracelets", slug: "gold-bracelets", count: 37 },
        ],
    },
    {
        id: 6,
        name: "Mangalsutra",
        slug: "mangalsutra",
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&auto=format",
        count: 98,
        subcategories: [
            { id: 61, name: "Diamond Mangalsutra", slug: "diamond-mangalsutra", count: 45 },
            { id: 62, name: "Gold Mangalsutra", slug: "gold-mangalsutra", count: 35 },
            { id: 63, name: "Short Mangalsutra", slug: "short-mangalsutra", count: 18 },
        ],
    },
];

export const navCategories = categories.map(c => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
    subcategories: c.subcategories,
}));
