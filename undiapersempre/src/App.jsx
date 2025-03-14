import { Facebook, Instagram, Menu, Twitter, Youtube } from "lucide-react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/Home"
import ConfirmAssistance from "./pages/ConfirmAssistance"
import DayOfTheEvent from "./pages/DayOfTheEvent"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirm-assistance" element={<ConfirmAssistance />} />
          <Route path="/day-of-the-event" element={<DayOfTheEvent />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

