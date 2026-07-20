import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Training from "./pages/Training";
import GetInvolved from "./pages/GetInvolved";
import Impact from "./pages/Impact";
import Resources from "./pages/Resources";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import usePageMetadata from "./hooks/usePageMetadata";

export default function App() {
  usePageMetadata();

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-slate-800 selection:bg-[#0072CE]/20 selection:text-[#0072CE] font-sans antialiased">
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/training" element={<Training />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
