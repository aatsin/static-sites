import React from "react";
import logo from "../assets/logo.png";
import ComponentCountdown from "../components/Countdown/ComponentCowntdown";
import {
  DecorativeBorder,
  DecorativeCorner,
  DecorativeTitle,
} from "../components/decorative";

export default function CountdownPage() {
  const endDate = new Date("2025-05-31T23:59:59");
  const now = new Date();
  const timeRemaining = endDate - now;
  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  return (
    <div className="flex flex-col lg:pl-20 lg:pr-20 pl-2 pr-2  min-h-screen bg-gatsby-night-900">
      <section className="pl-2 pr-2 mt-8 md:mt-16 relative w-full h-[400px]">
        <DecorativeCorner position="top-left" />
        <DecorativeCorner position="top-right" />
        <DecorativeBorder />

        <div className="mt-10">
          <div className="flex justify-center items-center">
            <img src={logo} alt="Un dia per sempre" className="h-30 w-30" />
          </div>
          <div className="inset-0 flex flex-col justify-center items-center drop-shadow-lg text-gatsby-pearl-500 text-center pt-10">
            <DecorativeTitle
              title="Un dia per sempre"
              subtitle="de Lourdes i David"
            />
          </div>
        </div>
      </section>

      <div className="items-center w-full mx-auto shadow-lg pl-2 pr-2">
        <div className="inset-0 flex flex-col drop-shadow-lg text-gatsby-pearl-500 text-center pt-10">
          <h2 className=" text-2xl lg:text-4xl xl:text-3xl font-serif text-gatsby-champagne-600 tracking-[0.3em] lg:mt-8">
            Entrades disponibles el:
          </h2>
          <h3 className="mt-10 text-4xl font-bold p-4 relative text-gatsby-pearl-500 rounded-lg tracking-[0.15em]">
            31 / 05 / 2025
          </h3>
          <ComponentCountdown endDate={endDate} />
        </div>
      </div>
      <div className="mt-10">
        <DecorativeBorder />
      </div>
      <div className="text-gatsby-gold-700 text-center mt-10 mb-10">
        <p>
          Web by{" "}
          <a
            href="https://aatsin.com"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            aatsin.com
          </a>{" "}
          © 2025
        </p>
      </div>
    </div>
  );
}
