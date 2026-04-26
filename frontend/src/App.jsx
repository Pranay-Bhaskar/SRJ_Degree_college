import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ManagementPage from "./pages/ManagementPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import FacilitiesPage from "./pages/FacilitiesPage";

import "./styles/global.css";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/management" element={<ManagementPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}