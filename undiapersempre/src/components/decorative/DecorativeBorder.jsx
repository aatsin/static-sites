export default function DecorativeBorder({ className = "" }) {
    return (
        <div className={`h-6 relative ${className}`}>
            <div className="absolute inset-0 flex flex-col gap-[2px]">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-gatsby-gold-500 to-transparent opacity-90"></div>
                <div className="h-[1px] bg-gradient-to-r from-transparent via-gatsby-gold-400 to-transparent opacity-70"></div>
                <div className="h-[1px] bg-gradient-to-r from-transparent via-gatsby-gold-300 to-transparent opacity-50"></div>
            </div>
            <div className="absolute inset-x-0 top-0 flex justify-center">
                <div className="relative w-32">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-gatsby-gold-400/30 rotate-45"></div>
                    <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-gatsby-gold-400/50 via-gatsby-gold-400/20 to-gatsby-gold-400/50"></div>
                    <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-gatsby-gold-400/50 via-gatsby-gold-400/20 to-gatsby-gold-400/50"></div>
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gatsby-gold-200/5 to-transparent animate-shine"></div>
        </div>
    );
} 