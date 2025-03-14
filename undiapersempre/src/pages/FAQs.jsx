import { motion } from "framer-motion"
import { DecorativeBorder, DecorativeButton, DecorativeCorner, DecorativeTitle } from "../components/decorative"
import Accordion from "../components/Accordion"
import { CopyIcon } from "lucide-react"
import { Link } from "react-router-dom"

const splitParagraphs = (paragraph) => {
    return paragraph.split('\n').map((paragraph, pIndex) => (
        <p key={pIndex} className="mb-4 last:mb-0">
            {paragraph}
        </p>
    ))
}

export default function FAQs() {
    const faqItems = [
        {
            question: "A on i com arribar?",
            answer: splitParagraphs(`"Un dia per sempre" es celebrarà al Mas Vivencs (La Pobla de Claramunt). Tant la cerimònia com el convit es dura a terme en la mateixa ubicació:
Barri dels Vivencs, 1, 08787 La Pobla de Claramunt, Barcelona
Es pot arribar amb cotxe propi, el lloc disposa de pàrquing privat.
Si no tens cotxe, també pots arribar amb FGC- R60 Igualada. La parada de la Pobla de Claramunt es troba a 5 min. caminant de la ubicació del casament.
Si no tens cap manera de poder arribar al lloc amb cap d'aquestes dues opcions, posa't en contacte amb nosaltres i et trobarem una solució perquè puguis venir a gaudir d'aquest dia.`)
        },
        {
            question: "Hi ha allotjament?",
            answer: <div>
                En el mateix Mas no hi ha allotjament disponible per a convidats. Però hi ha un hotel molt a prop del lloc perquè puguis gaudir de la festa fins al final.<br />
                <div className="flex flex-col gap-1 my-4 border-l-2 border-gatsby-gold-400 pl-4">
                    <span>Hotel Amèrica (Igualada)</span>
                    <span>938 03 10 00</span>
                    <a className="underline text-gatsby-gold-400" href="https://www.hotel-america.es/es/" target="_blank" rel="noopener noreferrer">Hotel Amèrica</a>
                </div>
                Si vols allotjar-te en aquest hotel tenim un descompte per vosaltres:

                <div className="flex mt-4 gap-2 items-center">
                    <span>Codi promocional: </span>
                    <span className="font-bold text-gatsby-gold-400">MASDELSVIVENCS10</span>
                    <span className="cursor-pointer" onClick={() => navigator.clipboard.writeText("MASDELSVIVENCS10")}>
                        <CopyIcon className="w-4 h-4 text-gatsby-gold-400" />
                    </span>
                </div>
            </div>
        },
        {
            question: "Poden assistir nens?",
            answer: "Aquesta obra es apte per tots els públics, per tant els nens si que podran assistir."
        },
        {
            question: "Puc portar acompanyant?",
            answer: "Si aquest acompanyant consta en la invitació entregada prèviament, si podrà venir."
        },
        {
            question: "Hi ha codi de vestimenta?",
            answer: splitParagraphs(`El codi de vestimenta es de (gala, elegant). Però pots venir amb el que tu et sentis mes còmode i estupenda, ningú et dirà res tothom es lliure de portar el que vulgui.
Demanem per això que es respecti l'exclusivitat dels artistes: prohibit el color blanc i els "trajes" verds.`)
        },
        {
            question: "Es poden fer sorpreses als nuvis?",
            answer: <div>
                I tant que si, totes les que vulgueu. Aquest dia tot si val i vosaltres també formeu part de que sigui un dia inoblidable. Aquí us deixem el contacte de la coordinadora del esdeveniment, ja que si heu pensat alguna cosa li comenteu a ella, perquè es pugui dur a terme sense cap tipus de problema.
                <div className="flex flex-col gap-1 my-4 border-l-2 border-gatsby-gold-400 pl-4">
                    <span>Laura Sánchez, Coordinadora Mas Vivencs</span>
                    <a href="mailto:laura@uauu.cat" className="underline text-gatsby-gold-400">laura@uauu.cat</a>
                </div>
            </div>
        },
        {
            question: "Com puc confirmar la meva assistència?",
            answer: <div>
                <div className="mb-4">Podeu clicar en el seguent botó i allà omplir el formulari amb les dades corresponents.</div>
                <Link to="/confirm-assistance" className="inline-block">
                    <DecorativeButton>
                        ENTRADES
                    </DecorativeButton>
                </Link>
                <div className="flex flex-col gap-1 my-4 border-l-2 border-gatsby-gold-400 pl-4">
                    <span>Recordeu que s'ha d'enviar abans de l'1 de setembre.</span>
                    <span>Omplir aquest formulari implica la confirmació d'assistència a l'esdeveniment. Si us plau, envieu-lo un cop tingueu clara la vostra assistència i la dels vostres acompanyants.</span>
                </div>
            </div>
        }
    ]

    return (
        <div className="min-h-screen bg-gatsby-night-800 overflow-x-hidden pb-32">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-[300px] md:h-[400px]"
            >
                <img
                    src="https://images.unsplash.com/photo-1535905496755-26ae35d0ae54?q=80&w=1974&auto=format&fit=crop"
                    alt="Preguntes freqüents"
                    className="absolute inset-0 w-full h-full object-cover brightness-30 opacity-35"
                />

                <DecorativeCorner position="top-left" />
                <DecorativeCorner position="top-right" />

                <DecorativeBorder />
                <div className="absolute inset-0 flex flex-col justify-center items-center drop-shadow-lg text-gatsby-pearl-500 text-center p-4">
                    <DecorativeTitle
                        title="preguntes freqüents"
                    />
                </div>
            </motion.section>

            <DecorativeBorder />

            {/* FAQ Section */}
            <section className="max-w-[1200px] mx-auto py-12 md:py-24 px-4">
                <Accordion items={faqItems} />
            </section>
        </div>
    )
} 