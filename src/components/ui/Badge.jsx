const variants = {
    gold: 'bg-[#C9A96E]/10 text-[#A07840] border border-[#C9A96E]/30',
    green: 'bg-green-50 text-green-700 border border-green-200',
    red: 'bg-red-50 text-red-700 border border-red-200',
    yellow: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
    blue: 'bg-blue-50 text-blue-700 border border-blue-200',
    gray: 'bg-gray-100 text-gray-600 border border-gray-200',
};

const statusMap = {
    Delivered: 'green',
    Shipped: 'blue',
    Processing: 'yellow',
    Cancelled: 'red',
    Pending: 'gray',
    Active: 'green',
    Inactive: 'gray',
};

export default function Badge({ label, variant, status }) {
    const resolvedVariant = variant || statusMap[status] || 'gray';
    return (
        <span className={`
      inline-flex items-center px-2.5 py-1
      font-sans-luxury text-xs tracking-widest uppercase
      ${variants[resolvedVariant]}
    `}>
            {label || status}
        </span>
    );
}
