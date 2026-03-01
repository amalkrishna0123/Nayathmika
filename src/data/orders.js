// Mock Orders Data
export const orders = [
    {
        id: "NAY-2026-001",
        date: "2026-02-14",
        status: "Delivered",
        total: 45999,
        items: [
            { productId: 1, name: "Radiant Diamond Solitaire Ring", qty: 1, price: 45999 }
        ],
        address: "123, Park Street, Mumbai - 400001",
        trackingId: "DELHIVERY123456789",
        paymentMethod: "Credit Card",
        timeline: [
            { status: "Order Placed", date: "2026-02-10", done: true },
            { status: "Payment Confirmed", date: "2026-02-10", done: true },
            { status: "Processing", date: "2026-02-11", done: true },
            { status: "Shipped", date: "2026-02-12", done: true },
            { status: "Out for Delivery", date: "2026-02-14", done: true },
            { status: "Delivered", date: "2026-02-14", done: true },
        ],
    },
    {
        id: "NAY-2026-002",
        date: "2026-02-20",
        status: "Shipped",
        total: 28500,
        items: [
            { productId: 2, name: "Royal Pearl Necklace Set", qty: 1, price: 28500 }
        ],
        address: "456, MG Road, Bangalore - 560001",
        trackingId: "BLUEDART987654321",
        paymentMethod: "UPI",
        timeline: [
            { status: "Order Placed", date: "2026-02-20", done: true },
            { status: "Payment Confirmed", date: "2026-02-20", done: true },
            { status: "Processing", date: "2026-02-21", done: true },
            { status: "Shipped", date: "2026-02-22", done: true },
            { status: "Out for Delivery", date: "", done: false },
            { status: "Delivered", date: "", done: false },
        ],
    },
    {
        id: "NAY-2026-003",
        date: "2026-02-25",
        status: "Processing",
        total: 18750,
        items: [
            { productId: 3, name: "Emerald Drop Earrings", qty: 1, price: 18750 }
        ],
        address: "789, Jubilee Hills, Hyderabad - 500033",
        trackingId: null,
        paymentMethod: "Net Banking",
        timeline: [
            { status: "Order Placed", date: "2026-02-25", done: true },
            { status: "Payment Confirmed", date: "2026-02-25", done: true },
            { status: "Processing", date: "2026-02-26", done: false },
            { status: "Shipped", date: "", done: false },
            { status: "Out for Delivery", date: "", done: false },
            { status: "Delivered", date: "", done: false },
        ],
    },
];

export const adminStats = {
    totalRevenue: 2456800,
    monthlyRevenue: 345600,
    totalOrders: 1284,
    pendingOrders: 48,
    totalCustomers: 3210,
    newCustomers: 124,
    totalProducts: 1163,
    lowStock: 23,
};

export const revenueData = [
    { month: "Aug", revenue: 180000 },
    { month: "Sep", revenue: 220000 },
    { month: "Oct", revenue: 195000 },
    { month: "Nov", revenue: 280000 },
    { month: "Dec", revenue: 420000 },
    { month: "Jan", revenue: 310000 },
    { month: "Feb", revenue: 345600 },
];

export const salesData = [
    { category: "Rings", sales: 320 },
    { category: "Necklaces", sales: 280 },
    { category: "Earrings", sales: 410 },
    { category: "Bangles", sales: 150 },
    { category: "Bracelets", sales: 88 },
    { category: "Mangalsutra", sales: 36 },
];
