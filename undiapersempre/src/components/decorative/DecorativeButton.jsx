export default function DecorativeButton({ children, onClick, className = "", ariaLabel }) {
    return (
        <button
            className={`
                relative overflow-hidden group
                px-8 py-3 rounded-sm
                bg-gradient-to-r from-gatsby-gold-600 via-gatsby-gold-500 to-gatsby-gold-600
                text-gatsby-night-500 font-medium tracking-wide
                transform transition-all duration-300
                hover:scale-[1.02] active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-gatsby-gold-400 focus:ring-offset-2 
                focus:ring-offset-gatsby-night-500
                shadow-[0_0_15px_rgba(178,139,75,0.2)] 
                hover:shadow-[0_0_20px_rgba(178,139,75,0.3)]
                ${className}
            `}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {/* Border frame */}
            <div className="absolute inset-0 border border-gatsby-gold-300/20"></div>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gatsby-gold-300/40"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gatsby-gold-300/40"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gatsby-gold-300/40"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gatsby-gold-300/40"></div>

            {/* Content */}
            <span className="relative z-10 font-serif">{children}</span>

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            
            {/* Subtle inner shadow */}
            <div className="absolute inset-0 opacity-50 group-hover:opacity-0 transition-opacity duration-300 bg-gradient-to-b from-black/5 to-transparent"></div>
        </button>
    );
} 