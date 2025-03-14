import Seats from "../components/seats";
import { DecorativeCorner, DecorativeBorder } from "../components/decorative";

export default function ConfirmAssistance() {
    const handleConfirmSeats = (seats) => {
        console.log(seats);
    }

    return (
        <div className="bg-gatsby-night-500/70 py-12 relative">
            {/* Decorative corners */}
            <DecorativeCorner position="top-left" size="w-16 h-16" />
            <DecorativeCorner position="top-right" size="w-16 h-16" />
            <DecorativeCorner position="bottom-left" size="w-16 h-16" />
            <DecorativeCorner position="bottom-right" size="w-16 h-16" />
            <Seats onConfirmSeats={handleConfirmSeats} />
        </div>
    )
}
