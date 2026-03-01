// Skeleton loader components for different UI elements

// Generic skeleton block
export function SkeletonBlock({ className = '' }) {
    return (
        <div className={`animate-pulse bg-gray-100 ${className}`} />
    );
}

// Product card skeleton
export function ProductCardSkeleton() {
    return (
        <div className="flex flex-col gap-3">
            <SkeletonBlock className="w-full aspect-square" />
            <SkeletonBlock className="h-4 w-3/4" />
            <SkeletonBlock className="h-3 w-1/2" />
            <SkeletonBlock className="h-5 w-1/3" />
        </div>
    );
}

// Text line skeletons
export function SkeletonText({ lines = 3, className = '' }) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {Array.from({ length: lines }).map((_, i) => (
                <SkeletonBlock
                    key={i}
                    className={`h-4 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`}
                />
            ))}
        </div>
    );
}

// Table row skeleton
export function TableRowSkeleton({ cols = 5 }) {
    return (
        <tr className="border-b border-gray-100">
            {Array.from({ length: cols }).map((_, i) => (
                <td key={i} className="px-6 py-4">
                    <SkeletonBlock className="h-4 w-full" />
                </td>
            ))}
        </tr>
    );
}
