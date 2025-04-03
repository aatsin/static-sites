import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ConfirmAssistance from "./pages/ConfirmAssistance";
import DayOfTheEvent from "./pages/DayOfTheEvent";
import FAQs from "./pages/FAQs";
import ScrollToTop from "./components/ScrollToTop";
import Countdown from "./pages/Countdown";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route 
          path="/" 
          element={import.meta.env.DEV ? <Countdown /> : <Layout><Home /></Layout> } 
        />

        {import.meta.env.DEV && (
          <>
            <Route path="/confirm-assistance" element={<Layout><ConfirmAssistance /></Layout>} />
            <Route path="/day-of-the-event" element={<Layout><DayOfTheEvent /></Layout>} />
            <Route path="/faqs" element={<Layout><FAQs /></Layout>} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
