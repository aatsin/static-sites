import { Facebook, Instagram, Menu, Twitter, Youtube } from "lucide-react"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-8 bg-white">
        <div>
          <h1 className="text-xl font-bold">Un dia per sempre</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-1">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Un dia per sempre"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center drop-shadow-lg text-white text-center p-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic mb-4">Un dia per sempre</h2>
          <h3 className="text-2xl md:text-3xl font-light">de Lourdes i David</h3>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex flex-col md:flex-row max-w-[1200px] mx-auto">
        <div className="w-full text-lg lg:w-2/3 p-6 md:p-12">
          <h4 className="font-bold mb-4">SINOPSI</h4>
          <p className="mb-6">
            Tot està a punt perquè comenci un dels esdeveniments més importants de la nostre vida. Un
            Nuvi i una Núvia decidits a construir un futur junts, ple de somnis, il·lusió i moments únics...
          </p>
          <p className="mb-6">
            Ha arribat l&#39;hora de dir-se el &quot;Si, vull&quot; davant de les persones que més estimen. Aconseguiran
            controlar els nervis i viure un dia de moments inoblidables? o algú tindrà alguna cosa a dir que
            capgiri els esdeveniments?
          </p>
          <p className="mb-6">
            Una obra plena de sorpreses, humor i  emocions a flor de pell que no et deixaran indiferent.
            Vine a formar part d&#39;aquest gran dia, tu també ets important. T&#39;ho perdràs?
          </p>
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/2 text-white p-6 md:p-12">
          <div className="bg-black p-6">
            <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
              <div className="mb-4">
                <h5 className="font-bold mb-2">Data</h5>
                <p>11/03/2025</p>
              </div>
              <div className="mb-4 flex-shrink-0">
                <h5 className="font-bold mb-2">Hora</h5>
                <p>A les 12h</p>
              </div>
              <div className="mb-4">
                <h5 className="font-bold mb-2">Espai</h5>
                <p>Restaurant Cal Pajares</p>
              </div>
            </div>
            <button className="w-full bg-white text-black py-3 px-4 font-medium mb-4 cursor-pointer">Comprar entrades</button>
          </div>
          <div className="text-black mt-6">
            <div>
              <p>
                Autoria: <span className="font-medium">Lourdes i David</span>
              </p>
              <p>
                Direcció: <span className="font-medium">Restaurant</span>
              </p>
              <p>
                Repartiment:{" "}
                <span className="font-medium">
                  Lourdes i David
                </span>
              </p>
              <p className="mt-6">Una producció de <a href="https://www.aatsin.com" target="_blank" rel="noopener noreferrer" className="underline">Aatsin</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-6 md:p-8 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <p className="text-sm"><a href="https://aatsin.com" target="_blank" rel="noopener noreferrer" className="underline">aatsin.com</a> © 2025</p>
          </div>

          <div className="flex gap-4 my-4 md:my-0">
            <a href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Youtube">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

