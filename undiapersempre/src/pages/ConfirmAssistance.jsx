import Seats from "../components/seats";
import {
  DecorativeCorner,
  DecorativeTitle,
  DecorativeButton,
} from "../components/decorative";
import { useState, useEffect } from "react";

export default function ConfirmAssistance() {
  const handleConfirmSeats = (seats) => {
    console.log(seats);
  };

  return (
    <div className="bg-gatsby-night-500/70 py-12 relative">
      {/* Decorative corners */}
      <DecorativeCorner position="top-left" size="w-16 h-16" />
      <DecorativeCorner position="top-right" size="w-16 h-16" />
      <DecorativeCorner position="bottom-left" size="w-16 h-16" />
      <DecorativeCorner position="bottom-right" size="w-16 h-16" />
      <Seats onConfirmSeats={handleConfirmSeats} />
    </div>
  );
}

const VALID_CODE = import.meta.env.VITE_VALID_CODE;

const CodeValidation = () => {
  const [inputCode, setInputCode] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedValidation = localStorage.getItem("codeValidated");
    if (storedValidation === "true") {
      setIsValid(true);
    }
  }, []);

  useEffect(() => {
    if (inputCode.length === 6) {
      if (inputCode === VALID_CODE) {
        setIsValid(true);
        setMessage(
          "El teu codi es vàlid. Ja pots reservar les teves entrades."
        );
      } else {
        setIsValid(false);
        setMessage(
          "El codi introduït es invàlid. Si l’has perdut o tens algun problema, contacta’ns per privat."
        );
      }
    } else {
      setMessage("");
      setIsValid(false);
    }
  }, [inputCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const fullCode = codePart1 + codePart2;

    // Simulate validation
    setTimeout(() => {
      if (fullCode === VALID_CODE) {
        localStorage.setItem("codeValidated", "true");
        setIsValid(true);
      } else {
        setError(
          "El codi introduït es invàlid. Si l’has perdut o tens algun problema, contacta’ns per privat."
        );
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-5">
      <div className="w-full lg:w-2/3 p-10 md:p-12 text-gatsby-pearl-300 relative">
        <DecorativeCorner position="top-left" />
        <DecorativeCorner position="top-right" />
        <DecorativeCorner position="bottom-left" />
        <DecorativeCorner position="bottom-right" />
        <DecorativeTitle
          title="Introdueix el codi que has rebut "
          className=" text-center"
          subtitle="amb la teva invitació per a poder reservar les teves entrades"
        />

        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            {[...Array(6).keys()].map((index) => {
              return (
                <>
                  <input
                    type="text"
                    value={inputCode.slice(index, index + 1)}
                    onChange={(e) =>
                      setInputCode(
                        inputCode +
                          e.target.value
                            .replace(/[^a-zA-Z0-9]/g, "")
                            .toUpperCase()
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Backspace") {
                        setInputCode((prevInputCode) =>
                          prevInputCode.slice(0, prevInputCode.length - 1)
                        );
                      }
                    }}
                    placeholder=""
                    maxLength="1"
                    required
                    className="w-24 h-14 bg-gray-800 border border-gray-700 rounded-lg text-white text-center text-xl font-mono focus:border-gatsby-gold-500 focus:gatsby-gold-300 focus:gatsby-gold-500 outline-none uppercase tracking-widest"
                  />
                  {index === 2 && (
                    <span className="text-gatsby-pearl-500 text-2xl font-bold">
                      -
                    </span>
                  )}
                </>
              );
            })}
          </div>

          {message && (
            <div
              className={
                "text-sm mb-4 text-center" +
                (isValid ? " text-white" : " text-red-500")
              }
            >
              {message}
            </div>
          )}

          <div className="flex items-center justify-center">
            {isValid && (
              <DecorativeButton
                type="submit"
                disabled={isLoading}
                ariaLabel="Reservar entrades"
                className="py-3 px-4 mb-2"
              >
                Reservar entrades
              </DecorativeButton>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
