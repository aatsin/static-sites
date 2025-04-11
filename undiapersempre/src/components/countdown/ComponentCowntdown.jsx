import Countdown from "react-countdown";

export default function ComponentCountdownTimer({ endDate }) {
  // Recibe endDate como prop
  return (
    <div className="flex justify-center mt-6">
      <Countdown
        date={endDate}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="flex gap-4 mt-4 text-center">
            <div className="p-4 relative text-gatsby-gold-400 rounded-lg">
              <p className="text-4xl font-bold">
                {days.toString().padStart(2, "0")}
              </p>
              <span className="text-lg text-gatsby-gold-600">Dies</span>
            </div>
            <div className="p-4 relative text-gatsby-gold-400 rounded-lg">
              <p className="text-4xl font-bold">
                {hours.toString().padStart(2, "0")}
              </p>
              <span className="text-lg text-gatsby-gold-600">Hores</span>
            </div>
            <div className="p-4 relative text-gatsby-gold-400 rounded-lg">
              <p className="text-4xl font-bold">
                {minutes.toString().padStart(2, "0")}
              </p>
              <span className="text-lg text-gatsby-gold-600">Minuts</span>
            </div>
            <div className="p-4 relative text-gatsby-gold-400 rounded-lg">
              <p className="text-4xl font-bold">
                {seconds.toString().padStart(2, "0")}
              </p>
              <span className="text-lg text-gatsby-gold-600">Segons</span>
            </div>
          </div>
        )}
      />
    </div>
  );
}
