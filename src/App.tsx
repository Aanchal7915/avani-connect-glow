// import { useEffect } from "react";
// import "./App.css";

// // UI + Providers
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { HelmetProvider } from "react-helmet-async";

// // Router
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // Layout
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";

// // Pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import CaseStudies from "./pages/CaseStudies";
// import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";
// import Courses from "./pages/Courses";
// import CourseDetail from "./pages/CourseDetail";
// import GetConsultation from "./pages/GetConsultation";
// import NotFound from "./pages/NotFound";
// import PrivacyPolicy from "./pages/privacypolicy";
// import TermsConditions from "./pages/termsnandcondition";
// import Index from "./pages/Index";

// const queryClient = new QueryClient();

// const AdminRedirect = () => {
//   useEffect(() => {
//     window.location.href = "https://avani-enterprises-admin-frontend.vercel.app/";
//   }, []);
//   return null;
// };

// const App = () => {
//   return (
//     <HelmetProvider>
//       <QueryClientProvider client={queryClient}>
//         <TooltipProvider>
//           <Toaster />
//           <Sonner />
//           <Router>
//             <ScrollToTop />
//             <div className="min-h-screen">
//               <Navbar />
//               <main>
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/about" element={<About />} />
//                   <Route path="/services" element={<Services />} />
//                   <Route path="/case-studies" element={<CaseStudies />} />
//                   <Route path="/contact" element={<Contact />} />
//                   <Route path="/blog" element={<Blog />} />
//                   <Route path="/courses" element={<Courses />} />
//                   <Route path="/courses/:id" element={<CourseDetail />} />
//                   <Route path="/get-consultation" element={<GetConsultation />} />
//                   <Route path="/not-found" element={<NotFound />} />
//                   <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//                   <Route path="/terms-and-conditions" element={<TermsConditions />} />
//                   <Route path="/web-dev" element={<Index />} />
//                   <Route path="/admin" element={<AdminRedirect />} />

//                   {/* Catch-all */}
//                   <Route path="*" element={<Navigate to="/not-found" />} />
//                 </Routes>
//               </main>
//               <Footer />
//             </div>
//           </Router>
//         </TooltipProvider>
//       </QueryClientProvider>
//     </HelmetProvider>
//   );
// };

// export default App;

import { useEffect } from "react";
import "./App.css";

// UI + Providers
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

// Router
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Layout
import Navbar from "./components/Navbar";
import Navbar1 from "./components/ui/navbar1";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";
import ScrollToTop from "./components/ScrollToTop";

// Router hook for conditional rendering
import { useLocation } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import GetConsultation from "./pages/GetConsultation";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/privacypolicy";
import TermsConditions from "./pages/termsnandcondition";
import Index from "./pages/Index";

// नई लाइन: ThankYou page import
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

const AdminRedirect = () => {
  useEffect(() => {
    window.location.href = "https://avani-enterprises-admin-frontend.vercel.app/";
  }, []);
  return null;
};

// Layout wrapper component for conditional Navbar/Footer rendering
const AppLayout = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Pages where Navbar should be hidden completely
  const hideNavbar = pathname === "/thank-you";

  // Pages where Navbar1 should be used instead of default Navbar
  const useNavbar1 = pathname === "/web-dev";

  // Pages where Footer should be hidden completely
  const hideFooter = pathname === "/thank-you";

  // Pages where Footer1 should be used instead of default Footer
  const useFooter1 = pathname === "/web-dev";

  return (
    <div className="min-h-screen">
      {!hideNavbar && (useNavbar1 ? <Navbar1 /> : <Navbar />)}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/get-consultation" element={<GetConsultation />} />

          {/* ये नया route जोड़ा है */}
          <Route path="/thank-you" element={<ThankYou />} />

          <Route path="/not-found" element={<NotFound />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/web-dev" element={<Index />} />
          <Route path="/admin" element={<AdminRedirect />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </main>
      {!hideFooter && (useFooter1 ? <Footer1 /> : <Footer />)}
    </div>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <ScrollToTop />
            <AppLayout />
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;