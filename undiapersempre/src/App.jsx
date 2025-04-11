import { Facebook, Instagram, Menu, Twitter, Youtube } from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import ConfirmAssistance from "./pages/ConfirmAssistance";
import DayOfTheEvent from "./pages/DayOfTheEvent";
import FAQs from "./pages/FAQs";
import ScrollToTop from "./components/ScrollToTop";
import CodeValidation from "./pages/validationCode";
import AllDataForm from "./pages/private/AllDataForm";
import FormResponses from "./pages/private/DataForms";
import Login from "./pages/private/Login";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirm-assistance" element={<ConfirmAssistance />} />
          <Route path="/day-of-the-event" element={<DayOfTheEvent />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/validation" element={<CodeValidation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<FormResponses />} />
          <Route path="/admin/:email" element={<AllDataForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
