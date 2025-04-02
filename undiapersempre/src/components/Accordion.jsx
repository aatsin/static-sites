import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { DecorativeCorner } from "./decorative"

export default function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-full max-w-3xl mx-auto space-y-4">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                >
                    <motion.button
                        onClick={() => toggleAccordion(index)}
                        className={`w-full text-left p-6 px-8 bg-gatsby-artdeco-900 relative overflow-hidden group ${openIndex === index ? 'rounded-t-lg' : 'rounded-lg'}`}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="absolute inset-0 bg-gatsby-gold-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-lg"></div>
                        <div className="relative z-10 flex justify-between items-center">
                            <h3 className="text-gatsby-champagne-300 text-xl font-medium tracking-wide font-serif">
                                {item.question}
                            </h3>
                            <motion.span
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-gatsby-gold-400 text-2xl"
                            >
                                ▼
                            </motion.span>
                        </div>
                        <DecorativeCorner position="top-left" />
                        <DecorativeCorner position="top-right" />
                        <DecorativeCorner position="bottom-left" />
                        <DecorativeCorner position="bottom-right" />
                    </motion.button>

                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 bg-gatsby-artdeco-900/50 rounded-b-lg">
                                    <div className="prose prose-invert max-w-none text-gatsby-pearl-500">
                                        {item.answer}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    )
} 