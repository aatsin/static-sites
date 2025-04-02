export default function DecorativeTitle({ title, subtitle, className = "" }) {
  return (
    <div className={`relative md:px-12 ${className}`}>
      <h1 className="relative text-4xl lg:text-5xl xl:text-6xl font-serif mb-4 tracking-[0.15em] select-none">
        <span className="relative">
          <span className="relative bg-gradient-to-b from-gatsby-pearl-100 via-gatsby-gold-300 to-gatsby-gold-400 bg-clip-text text-transparent">
            {title}
          </span>
        </span>
      </h1>

      {subtitle && (
        <>
          <div className="w-32 mx-auto my-2">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gatsby-gold-400 to-transparent"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gatsby-gold-300 to-transparent mt-[2px]"></div>
          </div>
          <div className="relative">
            <h2 className="text-2xl lg:text-4xl xl:text-3xl font-serif text-gatsby-champagne-400 tracking-[0.3em] mb-6">
              {subtitle}
            </h2>
          </div>
        </>
      )}
    </div>
  );
}
