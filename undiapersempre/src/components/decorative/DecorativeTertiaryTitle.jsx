export default function DecorativeTertiaryTitle({ title, className = "" }) {
    return (
        <div className={`relative ${className}`}>
            <h3 className="relative text-4xl font-gatsby tracking-[0.15em] mb-4 select-none">
                <span className="absolute inset-0 bg-gradient-to-b from-gatsby-iron-200 to-gatsby-iron-400 bg-clip-text text-transparent">{title}</span>
                <span className="relative bg-gradient-to-b from-gatsby-iron-100 via-gatsby-iron-300 to-gatsby-iron-400 bg-clip-text text-transparent">{title}</span>
            </h3>
        </div>
    );
} 