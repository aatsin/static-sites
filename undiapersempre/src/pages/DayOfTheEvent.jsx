import { DecorativeBorder, DecorativeCorner, DecorativeTitle, DecorativeTertiaryTitle, DecorativeQuaternaryTitle } from "../components/decorative"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function DayOfTheEvent() {
    const timelineEvents = [
        {
            time: "16:15",
            act: "Acte 1:",
            title: "benvinguda",
            icon: "🎭",
            illustration: "https://images.unsplash.com/photo-1511795409834-432f7d1f9b1f?q=80&w=2070&auto=format&fit=crop"
        },
        {
            time: "17:00",
            act: "Acte 2:",
            title: "cerimònia",
            icon: "💍",
            illustration: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
        },
        {
            time: "18:00",
            act: "Acte 3:",
            title: "aperitiu",
            icon: "🍸",
            illustration: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
        },
        {
            time: "20:00",
            act: "Acte 4:",
            title: "el gran sopar",
            icon: "🍽️",
            illustration: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
        },
        {
            time: "22:30",
            act: "Acte 5:",
            title: "comença la festa!",
            icon: "💃",
            illustration: "https://images.unsplash.com/photo-1511795409834-432f7d1f9b1f?q=80&w=2070&auto=format&fit=crop"
        }
    ]

    const TimelineEvent = ({ event, index }) => {
        const ref = useRef(null)
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start end", "center center"]
        })

        const scale = useTransform(scrollYProgress, [0.5, 3], [1, 4])
        const x = useTransform(
            scrollYProgress,
            [0, 1],
            [index % 2 === 0 ? -250 : 250, 0]
        )

        const CardContent = () => (
            <motion.div
                initial={{ y: 10 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10"
            >
                <div className="text-center flex flex-col items-center">
                    <h3 className="text-gatsby-champagne-500 text-xl md:text-4xl font-medium relative z-20 font-gatsby">{event.act}</h3>
                    <div className="relative mx-auto w-32 z-10">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-gatsby-gold-400/30 rotate-45"></div>
                        <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-gatsby-gold-400/50 via-gatsby-gold-400/20 to-gatsby-gold-400/50"></div>
                        <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-gatsby-gold-400/50 via-gatsby-gold-400/20 to-gatsby-gold-400/50"></div>
                    </div>
                    <p className="text-gatsby-pearl-500 text-lg md:text-xl relative z-20">{event.title}</p>
                </div>
            </motion.div>
        )

        return (
            <motion.div
                ref={ref}
                style={{ scale, x }}
                className="relative mb-16 md:mb-36 last:mb-0"
            >
                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col items-center relative px-4">
                    <div className="w-full flex items-center justify-center relative bg-gatsby-night-900 p-4 overflow-hidden mb-8">
                        <DecorativeTertiaryTitle title={event.time} />
                    </div>
                    <div className="flex items-center justify-center gap-8 mb-4 w-full">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="w-16 h-16 rounded-full border-4 border-gatsby-gold-400 bg-gatsby-night-800 flex items-center justify-center shadow-lg shadow-gatsby-gold-500/20 z-10"
                        >
                            <span className="text-2xl" role="img" aria-label={event.title}>
                                {event.icon}
                            </span>
                        </motion.div>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="group w-full max-w-sm relative mb-8"
                    >
                        <div className="relative bg-gatsby-artdeco-900 p-8 shadow-lg group-hover:shadow-gatsby-gold-500/20 transition-all duration-300">
                            <DecorativeCorner position="top-left" />
                            <DecorativeCorner position="top-right" />
                            <DecorativeCorner position="bottom-left" />
                            <DecorativeCorner position="bottom-right" />
                            <CardContent />
                        </div>
                    </motion.div>
                </div>

                {/* Desktop Layout */}
                <div className={`hidden md:flex gap-8 items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Left/Right Content */}
                    <div className="w-5/12 flex">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className={`group relative min-w-[300px] ${index % 2 === 0 ? 'ml-auto mr-8' : 'ml-8'}`}
                        >
                            <div className={`relative bg-gatsby-artdeco-900 p-8 pt-5 shadow-lg group-hover:shadow-gatsby-gold-500/20 transition-all duration-300 border-gatsby-gold-500`}>
                                <DecorativeCorner position="top-left" />
                                <DecorativeCorner position="top-right" />
                                <DecorativeCorner position="bottom-left" />
                                <DecorativeCorner position="bottom-right" />
                                <CardContent />
                            </div>
                        </motion.div>
                    </div>

                    <div className={`relative w-2/12 flex-shrink-0 flex flex-col items-center ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`}>
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="w-20 h-20 rounded-full border-4 border-gatsby-gold-400 bg-gatsby-night-800 flex items-center justify-center shadow-lg shadow-gatsby-gold-500/20 z-10 group-hover:shadow-gatsby-gold-500/30"
                        >
                            <span className="text-3xl" role="img" aria-label={event.title}>
                                {event.icon}
                            </span>
                        </motion.div>

                    </div>
                    <div className="w-2/12 flex">
                        <div className={`flex items-center flex-grow`}>
                            <DecorativeTertiaryTitle title={event.time} />
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }

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
                    src="https://images.unsplash.com/photo-1613210434051-4b00d62d03fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Guió de l'obra"
                    className="absolute inset-0 w-full h-full object-cover brightness-30 opacity-35"
                />

                <DecorativeCorner position="top-left" />
                <DecorativeCorner position="top-right" />

                <DecorativeBorder />
                <div className="absolute inset-0 flex flex-col justify-center items-center drop-shadow-lg text-gatsby-pearl-500 text-center p-4">
                    <DecorativeTitle
                        title="Guió de l'obra"
                        subtitle="Esperem que gaudiu de l'espectacle!"
                    />
                </div>
            </motion.section>

            <DecorativeBorder />

            {/* Timeline Section */}
            <section className="max-w-[1200px] mx-auto py-12 md:py-24 px-4">
                <div className="relative">
                    <motion.div
                        initial={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gatsby-gold-400 shadow-gatsby-gold-500/20"
                    ></motion.div>

                    {timelineEvents.map((event, index) => (
                        <TimelineEvent key={index} event={event} index={index} />
                    ))}
                </div>
            </section>
        </div>
    )
} 