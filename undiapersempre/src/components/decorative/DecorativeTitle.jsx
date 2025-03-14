export default function DecorativeTitle({ title, subtitle, className = "" }) {
    return (
        <div className={`relative md:px-12 ${className}`}>
            <h1 className="relative text-6xl lg:text-7xl xl:text-8xl font-gatsby mb-4 tracking-[0.15em] select-none">
                <span className="absolute inset-0 bg-gradient-to-b from-gatsby-gold-600 via-gatsby-gold-700 to-gatsby-gold-800 bg-clip-text text-transparent">{title}</span>
                <span className="absolute inset-0 bg-gradient-to-b from-gatsby-gold-300 via-gatsby-gold-400 to-gatsby-gold-500 bg-clip-text text-transparent">{title}</span>
                <span className="relative">
                    <span className="absolute inset-0 bg-gradient-to-br from-gatsby-pearl-200 via-transparent to-transparent bg-clip-text text-transparent hidden md:block">{title}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gatsby-pearl-200/50 to-transparent bg-[length:200%_100%] animate-shine bg-clip-text text-transparent hidden md:block">{title}</span>
                    <span className="relative bg-gradient-to-b from-gatsby-pearl-100 via-gatsby-gold-300 to-gatsby-gold-400 bg-clip-text text-transparent">{title}</span>
                </span>
                <span className="absolute inset-0 transform translate-y-[1px] blur-[0.5px] bg-gradient-to-b from-gatsby-night-800 via-gatsby-night-700 to-transparent opacity-50 bg-clip-text text-transparent">{title}</span>
            </h1>

            {subtitle && (<>
                <div className="w-32 mx-auto my-2">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gatsby-gold-400 to-transparent"></div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gatsby-gold-300 to-transparent mt-[2px]"></div>
                </div>
                <div className="relative">
                    <h2 className="text-2xl lg:text-4xl xl:text-5xl font-gatsby text-gatsby-champagne-400 tracking-[0.3em] mb-6">{subtitle}</h2>
                </div>
            </>
            )}
        </div>
    );
} 