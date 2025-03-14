export default function DecorativeCorner({ position = "top-left", size = "w-16 h-16", className = "" }) {
    const getGradientDirection = () => {
        switch (position) {
            case "top-left":
                return {
                    horizontal: "bg-gradient-to-r from-gatsby-gold-500 via-gatsby-gold-300 to-transparent",
                    vertical: "bg-gradient-to-b from-gatsby-gold-500 via-gatsby-gold-300 to-transparent"
                };
            case "top-right":
                return {
                    horizontal: "bg-gradient-to-l from-gatsby-gold-500 via-gatsby-gold-300 to-transparent",
                    vertical: "bg-gradient-to-b from-gatsby-gold-500 via-gatsby-gold-300 to-transparent"
                };
            case "bottom-left":
                return {
                    horizontal: "bg-gradient-to-r from-gatsby-gold-500 via-gatsby-gold-300 to-transparent",
                    vertical: "bg-gradient-to-t from-gatsby-gold-500 via-gatsby-gold-300 to-transparent"
                };
            case "bottom-right":
                return {
                    horizontal: "bg-gradient-to-l from-gatsby-gold-500 via-gatsby-gold-300 to-transparent",
                    vertical: "bg-gradient-to-t from-gatsby-gold-500 via-gatsby-gold-300 to-transparent"
                };
            default:
                return {
                    horizontal: "bg-gradient-to-r from-gatsby-gold-500 via-gatsby-gold-300 to-transparent",
                    vertical: "bg-gradient-to-b from-gatsby-gold-500 via-gatsby-gold-300 to-transparent"
                };
        }
    };

    const gradients = getGradientDirection();
    const positionClasses = {
        "top-left": "top-0 left-0",
        "top-right": "top-0 right-0",
        "bottom-left": "bottom-0 left-0",
        "bottom-right": "bottom-0 right-0"
    };

    const getLinePosition = () => {
        switch (position) {
            case "top-left":
                return { start: "left-0 top-0", end: "right-0 bottom-0" };
            case "top-right":
                return { start: "right-0 top-0", end: "left-0 bottom-0" };
            case "bottom-left":
                return { start: "left-0 bottom-0", end: "right-0 top-0" };
            case "bottom-right":
                return { start: "right-0 bottom-0", end: "left-0 top-0" };
            default:
                return { start: "left-0 top-0", end: "right-0 bottom-0" };
        }
    };

    const linePosition = getLinePosition();

    return (
        <div className={`absolute ${positionClasses[position]} ${size} ${className} overflow-hidden`}>
            {/* Main corner structure */}
            <div className="absolute inset-0">
                {/* Horizontal lines */}
                <div className={`absolute ${position.includes('top') ? 'top-0' : 'bottom-0'} left-0 right-0 flex flex-col gap-[2px]`}>
                    <div className={`h-[1px] ${gradients.horizontal} opacity-90`}></div>
                    <div className={`h-[1px] ${gradients.horizontal} opacity-70`}></div>
                    <div className={`h-[1px] ${gradients.horizontal} opacity-50`}></div>
                </div>
                {/* Vertical lines */}
                <div className={`absolute ${position.includes('left') ? 'left-0' : 'right-0'} top-0 bottom-0 flex flex-row gap-[2px]`}>
                    <div className={`w-[1px] ${gradients.vertical} opacity-90`}></div>
                    <div className={`w-[1px] ${gradients.vertical} opacity-70`}></div>
                    <div className={`w-[1px] ${gradients.vertical} opacity-50`}></div>
                </div>
            </div>
            {/* Art deco triangular accent */}
            <div className={`absolute ${position.includes('top') ? 'top-2' : 'bottom-2'} ${position.includes('left') ? 'left-2' : 'right-2'} w-4 h-4`}>
                <div className={`absolute inset-0 border border-gatsby-gold-400/20 transform ${position === 'top-left' || position === 'bottom-right' ? 'rotate-45' : '-rotate-45'}`}></div>
            </div>
        </div>
    );
} 