import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './Components/About';
import Services from './Components/Services';
// import Businesses from './Components/Businesses';
import Registrations from './Components/Registrations';
import Reports from './Components/Reports';
import Industries from './Components/Industries';
import Contact from './Components/Contact';
import App from './App';
import TermsConditions from "./Components/TermsConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import ServicePolicy from "./Components/ServicePolicy";
import Outsource from "./Components/Outsource";
import DisclaimerPolicy from "./Components/DisclaimerPolicy";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/registrations" element={<Registrations />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/outsource" element={<Outsource />} />

        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termsCondition" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/service-policy" element={<ServicePolicy />} />
        <Route path="/disclaimer-policy" element={<DisclaimerPolicy />} />



      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
