import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import Menu from "../menu"
import logo from "../../assets/logo.png"
import { DecorativeBorder } from "../decorative";


export default function Layout({ children }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoHome = () => {
        navigate("/");
    }

    return (
        <div className="flex flex-col min-h-screen bg-gatsby-night-900">

            <header className="flex justify-between items-center p-4">
                <div>
                    <h1 className="text-xl font-bold cursor-pointer" onClick={handleGoHome}>
                        <img src={logo} alt="Un dia per sempre" className="h-16" />
                    </h1>
                </div>
                {location.pathname !== "/" && (
                    <div className="flex flex-col items-center">
                        <p className="text-gatsby-gold-400 font-gatsby text-2xl tracking-[0.15em]">Un dia per sempre</p>
                        <p className="text-gatsby-champagne-300 italic font-gatsby text-md tracking-wider">de Lourdes i David</p>
                    </div>
                )}
                <div className="flex items-center gap-4">
                    <Menu />
                </div>
            </header>


            <main className="flex-grow">
                {children}
            </main>

            <DecorativeBorder />

            <footer className="text-gatsby-gold-500 p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex items-center gap-4 my-4 md:my-0">
                        <p className="flex flex-col items-start">
                            <span className="text-md font-serif font-bold tracking-wide">Un dia per sempre</span>
                            <span className="text-sm self-end font-serif tracking-wider">
                                de Lourdes i David
                            </span>
                        </p>
                        <div>
                            <img src={logo} alt="Un dia per sempre" className="h-16" />
                        </div>
                    </div>
                    <div className="text-sm">
                        <p>Web by <a href="https://aatsin.com" target="_blank" rel="noopener noreferrer" className="underline">aatsin.com</a> © 2025</p>
                    </div>
                </div>
            </footer>
        </div>

    )
}