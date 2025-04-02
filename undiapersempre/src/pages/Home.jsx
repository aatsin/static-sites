import { useNavigate } from "react-router-dom"
import { DecorativeBorder, DecorativeCorner, DecorativeTitle, DecorativeButton, DecorativeQuaternaryTitle, DecorativeTertiaryTitle } from "../components/decorative"

export default function Home() {
    const navigate = useNavigate()
    const handleBuyTickets = () => {
        navigate("/confirm-assistance");
    }

    return (
        <div className="min-h-screen bg-gatsby-night-800">

            {/* Hero Section */}
            <section className="relative w-full h-[400px]">
                <img
                    src="https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Un dia per sempre"
                    className="absolute inset-0 w-full h-full object-cover brightness-30 opacity-35"
                />

                <DecorativeCorner position="top-left" />
                <DecorativeCorner position="top-right" />

                <DecorativeBorder />
                <div className="absolute inset-0 flex flex-col justify-center items-center drop-shadow-lg text-gatsby-pearl-500 text-center p-4">
                    <DecorativeTitle
                        title="Un dia per sempre"
                        subtitle="de Lourdes i David"
                    />
                </div>
            </section>

            <DecorativeBorder />

            {/* Content Section */}
            <section className="flex flex-col md:flex-row gap-4 max-w-[1200px] mx-auto py-12">
                <div className="w-full lg:w-2/3 p-10 md:p-12 text-gatsby-pearl-300 relative">
                    <DecorativeCorner position="top-left" />
                    <DecorativeCorner position="top-right" />
                    <DecorativeCorner position="bottom-left" />
                    <DecorativeCorner position="bottom-right" />
                    <div className="relative">
                        <DecorativeTertiaryTitle title="Sinopsi" />
                    </div>
                    <div className="text-md md:text-lg ">
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
                            Una obra plena de sorpreses, humor i  emocions a flor de pell que no et deixaran indiferent.
                            Vine a formar part d&#39;aquest gran dia, tu també ets important. T&#39;ho perdràs?
                        </p>

                    </div>
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/2 text-gatsby-pearl-300 p-8 py-10 md:py-8 relative">
                    <DecorativeCorner position="top-left" />
                    <DecorativeCorner position="top-right" />
                    <DecorativeCorner position="bottom-left" />
                    <DecorativeCorner position="bottom-right" />
                    <div className="bg-gatsby-artdeco-900 p-6 border border-gatsby-gold-500 relative">
                        <div className="flex flex-col lg:flex-row flex-wrap justify-start gap-4 mb-6">
                            <div className="min-w-[150px]">
                                <DecorativeQuaternaryTitle title="Data" />
                                <p>26/09/2025</p>
                            </div>
                            <div className="flex-shrink-0">
                                <DecorativeQuaternaryTitle title="Hora" />
                                <p>A les 16:15</p>
                            </div>
                            <div>
                                <DecorativeQuaternaryTitle title="Espai" />
                                <p>Mas Vivencs, La Pobla de Claramunt</p>
                            </div>
                        </div>
                        <DecorativeButton
                            onClick={handleBuyTickets}
                            ariaLabel="Comprar entrades"
                            className="w-full py-3 px-4 mb-2"
                        >
                            Comprar entrades
                        </DecorativeButton>
                    </div>
                    <div className="text-gatsby-pearl-300 mt-6">
                        <div>
                            <p>
                                Intèrprets: <span className="font-medium text-gatsby-gold-200">Lourdes Bautista i David Canals</span>
                            </p>
                            <p>
                                Direcció: <span className="font-medium text-gatsby-gold-200">Virginia Bautista i Pep Carrera</span>
                            </p>
                            <p>
                                Dramatúrgia: <span className="font-medium text-gatsby-gold-200">Lourdes Bautista i David Canals</span>
                            </p>
                            <p>
                                Ajudant de direcció: <span className="font-medium text-gatsby-gold-200">Emma Bautista Lara</span>
                            </p>
                            <p>Producció: <a href="https://www.aatsin.com" target="_blank" rel="noopener noreferrer" className="text-gatsby-gold-200 hover:text-gatsby-gold-500 hover:underline focus:outline-none focus:ring-2 focus:ring-gatsby-gold-200 focus:ring-offset-2 focus:ring-offset-gatsby-night-500">Aatsin Tech</a></p>
                            <p>Escenografía: <span className="font-medium text-gatsby-gold-200">Mas Vivencs</span></p>
                            <p>Fotografía: <span className="font-medium text-gatsby-gold-200">Patolavida Studio</span></p>
                            <p>Espai sonor: <span className="font-medium text-gatsby-gold-200">Conecta So</span></p>
                            <p>Vestuari: <span className="font-medium text-gatsby-gold-200">Atelier de Bodas</span></p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
