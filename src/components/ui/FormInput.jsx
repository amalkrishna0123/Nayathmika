// Reusable form input components

export function Input({ label, id, error, className = '', ...props }) {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            {label && (
                <label htmlFor={id} className="font-sans-luxury text-xs tracking-widest uppercase text-gray-500">
                    {label}
                </label>
            )}
            <input
                id={id}
                className={`
          w-full px-4 py-3 border font-sans-luxury text-sm
          outline-none transition-all duration-200
          ${error
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-gray-200 focus:border-[#C9A96E]'
                    }
          bg-white placeholder:text-gray-300
        `}
                {...props}
            />
            {error && <p className="text-xs text-red-500 font-sans-luxury">{error}</p>}
        </div>
    );
}

export function Select({ label, id, options = [], error, className = '', ...props }) {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            {label && (
                <label htmlFor={id} className="font-sans-luxury text-xs tracking-widest uppercase text-gray-500">
                    {label}
                </label>
            )}
            <select
                id={id}
                className={`
          w-full px-4 py-3 border font-sans-luxury text-sm
          outline-none transition-all duration-200 bg-white
          ${error ? 'border-red-400' : 'border-gray-200 focus:border-[#C9A96E]'}
        `}
                {...props}
            >
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            {error && <p className="text-xs text-red-500 font-sans-luxury">{error}</p>}
        </div>
    );
}

export function Textarea({ label, id, error, className = '', rows = 4, ...props }) {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            {label && (
                <label htmlFor={id} className="font-sans-luxury text-xs tracking-widest uppercase text-gray-500">
                    {label}
                </label>
            )}
            <textarea
                id={id}
                rows={rows}
                className={`
          w-full px-4 py-3 border font-sans-luxury text-sm resize-none
          outline-none transition-all duration-200 bg-white
          placeholder:text-gray-300
          ${error ? 'border-red-400' : 'border-gray-200 focus:border-[#C9A96E]'}
        `}
                {...props}
            />
            {error && <p className="text-xs text-red-500 font-sans-luxury">{error}</p>}
        </div>
    );
}

export function Checkbox({ label, id, className = '', ...props }) {
    return (
        <label htmlFor={id} className={`flex items-center gap-3 cursor-pointer group ${className}`}>
            <input
                type="checkbox"
                id={id}
                className="w-4 h-4 accent-[#C9A96E] cursor-pointer"
                {...props}
            />
            <span className="font-sans-luxury text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {label}
            </span>
        </label>
    );
}
