import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Shield, FileText, Lock } from 'lucide-react';
import Sparks from './components/Sparks';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Method from './pages/Method';
import EbookLanding from './pages/EbookLanding';
import Academy from './pages/Academy';
import Store from './pages/Store';
import Contact from './pages/Contact';

// Footer Component (Global)
const Footer = () => {
  const location = useLocation();
  // Hide footer on Squeeze Page
  if (location.pathname === '/descarga-ebook') return null;

  return (
    <footer className="relative z-10 w-full py-8 border-t border-white/5 bg-black">
      <div className="flex flex-col items-center justify-center max-w-5xl gap-4 px-6 mx-auto text-xs text-gray-600 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Forja Tu Mente. Todos los derechos reservados.</p>
        <nav className="flex gap-6">
          <a href="#" className="flex items-center gap-1 transition-colors hover:text-[#ff4400]">
            <Shield size={12} /> Privacidad
          </a>
          <a href="#" className="flex items-center gap-1 transition-colors hover:text-[#ff4400]">
            <FileText size={12} /> Términos
          </a>
          <a href="#" className="flex items-center gap-1 transition-colors hover:text-[#ff4400]">
            <Lock size={12} /> Seguridad
          </a>
        </nav>
      </div>
    </footer>
  );
};

// Dynamic Title Updater
const PageTitleUpdater = () => {
  const location = useLocation();
  
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Forja Tu Mente | Inicio',
      '/metodo': 'Método Forja | Mentoría 90 Días',
      '/descarga-ebook': 'Manual Gratuito | Anti-Procrastinación',
      '/aula': 'Aula Digital | Formación',
      '/tienda': 'La Armería | Recursos Digitales',
      '/contacto': 'Contacto | Forja Tu Mente'
    };
    
    const title = titles[location.pathname] || 'Forja Tu Mente';
    document.title = title;
  }, [location]);

  return null;
};

// Main Layout
const Layout = () => {
  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col bg-black selection:bg-[#ff4400] selection:text-white touch-manipulation font-inter">
      <PageTitleUpdater />
      {/* Global Background */}
      <div 
        className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_#1a0000_0%,_#000000_100%)] opacity-90 pointer-events-none"
        aria-hidden="true"
      />
      <Sparks />
      
      <Navbar />
      
      <main className="flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metodo" element={<Method />} />
          <Route path="/descarga-ebook" element={<EbookLanding />} />
          <Route path="/aula" element={<Academy />} />
          <Route path="/tienda" element={<Store />} />
          <Route path="/contacto" element={<Contact />} />
          {/* Catch-all route redirecting to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
};

export default App;