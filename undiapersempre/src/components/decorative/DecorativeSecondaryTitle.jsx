export default function DecorativeSecondaryTitle({ title, className = "" }) {
    return (
        <div className={`relative ${className}`}>
            <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-gatsby tracking-[0.25em] select-none">
                <span className="absolute inset-0 bg-gradient-to-b from-gatsby-gold-400 to-gatsby-gold-600 bg-clip-text text-transparent">{title}</span>
                <span className="relative bg-gradient-to-b from-gatsby-gold-300 via-gatsby-gold-400 to-gatsby-gold-500 bg-clip-text text-transparent">{title}</span>
            </h2>
        </div>
    );
} 