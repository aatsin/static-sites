import Countdown from "react-countdown";

export default function ComponentCountdownTimer({ endDate }) {  // Recibe endDate como prop
  return (
    <div className="flex justify-center mt-6">
      <Countdown
        date={endDate}
        renderer={({ days, hours, minutes, seconds }) => (
            <div className="flex gap-4 mt-4 text-center">
            <div className="p-4 relative bg-gradient-to-b from-gatsby-pearl-100 via-gatsby-gold-300 to-gatsby-gold-400 bg-clip-text text-transparent rounded-lg">
            <p className="text-4xl font-bold">{days}</p>
                <span className="text-lg">Dies</span>
              </div>
              <div className="p-4 relative bg-gradient-to-b from-gatsby-pearl-100 via-gatsby-gold-300 to-gatsby-gold-400 bg-clip-text text-transparent rounded-lg">
                <p className="text-4xl font-bold">{hours}</p>
                <span className="text-lg">Hores</span>
              </div>
              <div className="p-4 relative bg-gradient-to-b from-gatsby-pearl-100 via-gatsby-gold-300 to-gatsby-gold-400 bg-clip-text text-transparent rounded-lg">
                <p className="text-4xl font-bold">{minutes}</p>
                <span className="text-lg">Minuts</span>
              </div>
              <div className="p-4 relative bg-gradient-to-b from-gatsby-pearl-100 via-gatsby-gold-300 to-gatsby-gold-400 bg-clip-text text-transparent rounded-lg">
                <p className="text-4xl font-bold">{seconds}</p>
                <span className="text-lg">Segons</span>
              </div>
            </div>
        )}
      />
    </div>
  );
}
