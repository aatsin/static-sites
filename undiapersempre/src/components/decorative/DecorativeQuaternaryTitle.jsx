export default function DecorativeQuaternaryTitle({ title, className = "" }) {
    return (
        <div className={`relative ${className}`}>
            <h4 className="relative text-2xl font-gatsby tracking-[0.12em] select-none">
                <span className="absolute inset-0 bg-gradient-to-b from-gatsby-iron-300 to-gatsby-iron-500 bg-clip-text text-transparent opacity-90">{title}</span>
                <span className="relative bg-gradient-to-b from-gatsby-iron-200 to-gatsby-iron-400 bg-clip-text text-transparent">{title}</span>
            </h4>
        </div>
    );
} 