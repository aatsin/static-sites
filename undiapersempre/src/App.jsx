import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import ConfirmAssistance from "./pages/ConfirmAssistance";
import DayOfTheEvent from "./pages/DayOfTheEvent";
import FAQs from "./pages/FAQs";
import ScrollToTop from "./components/ScrollToTop";
import CountdownPage from "./pages/CountdownPage";
import UpcomingProduction from "./pages/UpcomingProduction";
import Login from "./pages/private/Login";
import AllDataForm from "./pages/private/AllDataForm";
import DataForms from "./pages/private/DataForms";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            import.meta.env.DEV ? (
              <Layout>
                <Home />
              </Layout>
            ) : (
              <CountdownPage />
            )
          }
        />

        {import.meta.env.DEV && (
          <>
            <Route
              path="/confirm-assistance"
              element={
                <Layout>
                  <ConfirmAssistance />
                </Layout>
              }
            />
            <Route
              path="/day-of-the-event"
              element={
                <Layout>
                  <DayOfTheEvent />
                </Layout>
              }
            />
            <Route
              path="/faqs"
              element={
                <Layout>
                  <FAQs />
                </Layout>
              }
            />
            <Route
              path="/upcoming-production"
              element={
                <Layout>
                  <UpcomingProduction />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
            <Route
              path="/admin/:email"
              element={
                <Layout>
                  <AllDataForm />
                </Layout>
              }
            />
            <Route
              path="/admin"
              element={
                <Layout>
                  <DataForms />
                </Layout>
              }
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
