import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigationType } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CRM from "./pages/CRM";
import ERP from "./pages/ERP";
import ITSM from "./pages/ITSM";
import PayrollHR from "./pages/PayrollHR";
import Ecommerce from "./pages/Ecommerce";
import MobileApps from "./pages/MobileApps";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndServices from "./pages/TermsAndServices";
import CookiePolicy from "./pages/CookiePolicy";
import IndustryExpertise from "./pages/IndustryExpertise";
import BespokeApps from "./pages/BespokeApps";
import DigitalMarketing from "./pages/DigitalMarketing";
import Advertising from "./pages/Advertising";
import WebDesign from "./pages/WebDesign";
import "@fontsource/allura/400.css";

import Loader from "./components/Loader";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const navigationType = useNavigationType(); // Detect route change

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // fake delay for smoother effect
    return () => clearTimeout(timer);
  }, [navigationType]);

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services/website-design-and-development" element={<WebDesign />} />
        <Route path="/services/mobile-app-development" element={<MobileApps />} />
        <Route path="/services/web-app-bespoke-app" element={<BespokeApps />} />
        <Route path="/services/ecommerce" element={<Ecommerce />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/advertising" element={<Advertising />} />
        <Route path="/about" element={<About />} />
        <Route path="/expertise" element={<IndustryExpertise />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-services" element={<TermsAndServices />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppButton />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
