import React, { useState, useCallback, useRef, useEffect } from 'react';
import { 
  Send, Terminal, Shield, Lock, FileText, MapPin, ArrowRight, 
  Flame, Hammer, Crown, Award, Users, Target, Zap 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { streamForgeResponse } from '../services/geminiService';

// --- Subcomponents (Keep them here for simplicity or move to /components) ---

const ManifestoSection = () => (
  <section className="w-full py-24 px-6 bg-[#050505] relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#111] opacity-20 pointer-events-none">
      <Hammer size={400} strokeWidth={0.5} />
    </div>
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-sm text-[#ff4400] font-bold tracking-[0.3em] uppercase mb-4">Filosofía</h2>
        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
          El Manifiesto del <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4400] to-[#ff8800]">Acero</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Target className="text-[#ff4400]" size={32} />,
            title: "Disciplina Absoluta",
            desc: "La motivación es combustible barato. La disciplina es el motor que nunca se apaga, incluso en el frío más oscuro."
          },
          {
            icon: <Shield className="text-[#ff4400]" size={32} />,
            title: "Resiliencia Estoica",
            desc: "No controlas lo que te sucede, solo cómo reaccionas. Convertimos el obstáculo en el camino y el dolor en poder."
          },
          {
            icon: <Crown className="text-[#ff4400]" size={32} />,
            title: "Soberanía Mental",
            desc: "Tu mente es tu reino. Si no la gobiernas tú con mano de hierro, alguien más lo hará por ti."
          }
        ].map((item, idx) => (
          <article key={idx} className="group p-8 border border-[#222] bg-[#0a0a0a] hover:border-[#ff4400] transition-colors duration-500 rounded-sm flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-[#111] rounded-full group-hover:scale-110 transition-transform duration-300 border border-[#333] group-hover:border-[#ff4400]">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">{item.title}</h4>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const AuthoritySection = () => (
  <section className="w-full py-20 px-6 border-y border-white/5 bg-gradient-to-r from-[#0a0000] to-[#111]">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
           <div className="absolute inset-0 border-2 border-[#ff4400] rotate-3"></div>
           <div className="absolute inset-0 border-2 border-[#333] -rotate-3 bg-[#050505] flex items-center justify-center overflow-hidden">
              <Users size={120} className="text-gray-800" />
              <div className="absolute bottom-0 w-full bg-[#ff4400]/10 py-2 text-center text-[#ff4400] font-bold tracking-widest text-xs uppercase backdrop-blur-sm">
                Fundador
              </div>
           </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-sm text-[#ff4400] font-bold tracking-[0.3em] uppercase mb-2">Autoridad</h2>
        <h3 className="text-3xl md:text-4xl font-black text-white mb-6">FORJANDO LÍDERES DESDE EL CAOS</h3>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          "No vendo humo, vendo fuego. Durante la última década, he ayudado a emprendedores y atletas a destruir sus límites mentales. Mi método no es para todos; es solo para aquellos dispuestos a quemar su antigua versión."
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-8">
          {[
            { num: "+5k", label: "Mentes Forjadas" },
            { num: "100%", label: "Compromiso" },
            { num: "+10", label: "Años Experiencia" },
            { num: "24/7", label: "Disciplina" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-white">{stat.num}</span>
              <span className="text-xs text-[#ff4400] uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="w-full py-24 px-6 bg-black">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm text-[#ff4400] font-bold tracking-[0.3em] uppercase mb-4">El Arsenal</h2>
        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
          Servicios de <span className="text-white">Alto Nivel</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div className="group relative p-8 bg-[#0a0a0a] border border-[#222] hover:border-[#ff4400] transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
             <Zap className="text-[#ff4400]" size={40} />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">La Chispa (Ebook)</h4>
          <p className="text-[#ff4400] font-mono text-sm mb-6">INICIACIÓN</p>
          <p className="text-gray-400 text-sm mb-8">Guía táctica de 50 páginas para reiniciar tu sistema de creencias.</p>
          <Link to="/descarga-ebook" className="w-full block text-center py-3 border border-[#333] text-gray-300 hover:bg-[#ff4400] hover:text-black hover:border-[#ff4400] transition-colors font-bold text-sm tracking-wider uppercase">
            Conseguir Gratis
          </Link>
        </div>
        {/* Service 2 (Featured) */}
        <div className="group relative p-8 bg-[#0a0a0a] border border-[#ff4400] shadow-[0_0_20px_rgba(255,68,0,0.1)] transform md:scale-105 z-10">
          <div className="absolute top-0 w-full left-0 bg-[#ff4400] text-black text-center text-xs font-bold py-1 tracking-widest uppercase">
            Más Solicitado
          </div>
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity mt-6">
             <Hammer className="text-[#ff4400]" size={40} />
          </div>
          <h4 className="text-2xl font-bold text-white mb-2 mt-4">Método Forja (90 Días)</h4>
          <p className="text-[#ff4400] font-mono text-sm mb-6">TRANSFORMACIÓN TOTAL</p>
          <p className="text-gray-400 text-sm mb-8">Programa intensivo de 12 semanas. Mentoría 1:1, plan de acción y comunidad.</p>
          <Link to="/metodo" className="w-full block text-center py-4 bg-[#ff4400] text-black hover:bg-white transition-colors font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#ff4400]/20">
            Ver Programa
          </Link>
        </div>
        {/* Service 3 */}
        <div className="group relative p-8 bg-[#0a0a0a] border border-[#222] hover:border-[#ff4400] transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
             <Award className="text-[#ff4400]" size={40} />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Aula Digital</h4>
          <p className="text-[#ff4400] font-mono text-sm mb-6">FORMACIÓN CONTINUA</p>
          <p className="text-gray-400 text-sm mb-8">Acceso vitalicio a cursos sueltos y bootcamps grabados.</p>
          <Link to="/aula" className="w-full block text-center py-3 border border-[#333] text-gray-300 hover:bg-[#ff4400] hover:text-black hover:border-[#ff4400] transition-colors font-bold text-sm tracking-wider uppercase">
            Explorar Cursos
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const LeadMagnetSection = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="w-full py-24 px-6 border-t border-white/10 bg-gradient-to-b from-black to-[#0a0000] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left: Copy */}
        <div className="flex-1 text-center md:text-left z-10">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff4400]/10 border border-[#ff4400] rounded-full text-[#ff4400] text-xs font-bold uppercase tracking-widest mb-6">
              <Flame size={12} fill="currentColor" /> Gratis por tiempo limitado
           </div>
           <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-none tracking-tighter">
             DOMINA LA <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4400] to-yellow-600">PROCRASTINACIÓN</span> <br/>EN 72 HORAS
           </h3>
           <p className="text-gray-400 text-lg mb-8 leading-relaxed">
             No es falta de tiempo, es falta de enfoque. Descarga el manual táctico que ha ayudado a más de 2,000 personas a recuperar el control de su vida sin "trucos" baratos.
           </p>
           
           <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
             <input 
               type="email" 
               placeholder="Ingresa tu mejor email..." 
               className="flex-1 bg-[#111] border border-[#333] text-white px-4 py-3 focus:border-[#ff4400] focus:outline-none"
             />
             <Link to="/descarga-ebook" className="bg-[#ff4400] hover:bg-[#ff2200] text-black font-bold px-6 py-3 uppercase tracking-wider transition-all flex items-center justify-center gap-2">
               Descargar <ArrowRight size={18} />
             </Link>
           </form>
           <p className="mt-4 text-xs text-gray-600">
             <Lock size={10} className="inline mr-1"/> Tus datos están blindados.
           </p>
        </div>

        {/* Right: 3D Book Mockup (CSS Only) */}
        <div className="flex-1 flex justify-center perspective-1000">
          <div className="relative w-[240px] h-[360px] bg-[#0a0a0a] border-r-4 border-b-4 border-[#111] shadow-[20px_20px_60px_rgba(255,68,0,0.15)] transform rotate-y-[-15deg] rotate-x-[5deg] transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0 group">
             {/* Book Cover */}
             <div className="absolute inset-0 bg-[#000] border border-[#333] flex flex-col items-center justify-between p-6 overflow-hidden">
                <div className="w-full text-center border-b border-[#ff4400] pb-4">
                   <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Manual Táctico</p>
                </div>
                <div className="text-center">
                   <h4 className="text-3xl font-black text-white uppercase leading-none mb-1">Anti</h4>
                   <h4 className="text-3xl font-black text-[#ff4400] uppercase leading-none">Pereza</h4>
                </div>
                <div className="w-full flex justify-between items-end">
                   <Users size={20} className="text-gray-700" />
                   <div className="h-8 w-8 bg-[#ff4400] rounded-full opacity-20 group-hover:opacity-100 transition-opacity blur-md"></div>
                </div>
                {/* Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
             </div>
             {/* Pages Effect */}
             <div className="absolute top-1 bottom-1 -right-3 w-3 bg-[#ddd] transform skew-y-[45deg] border-l border-gray-400"></div>
             <div className="absolute -bottom-3 left-1 right-1 h-3 bg-[#ccc] transform skew-x-[45deg] border-t border-gray-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => (
  <section className="w-full relative min-h-[500px] flex flex-col md:flex-row border-t border-white/10">
    <div className="w-full md:w-2/3 h-[400px] md:h-auto bg-[#111] relative overflow-hidden grayscale invert contrast-[1.1] brightness-[0.8]">
       <iframe 
         width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} 
         src="https://maps.google.com/maps?q=Calle+Aurora+5,+03203+Elche,+Alicante&t=&z=15&ie=UTF8&iwloc=&output=embed"
         title="Ubicación de La Fragua"
         style={{ filter: 'grayscale(100%) invert(100%)' }}
       ></iframe>
       <div className="absolute inset-0 bg-[#ff4400] mix-blend-overlay opacity-10 pointer-events-none"></div>
    </div>
    <div className="w-full md:w-1/3 bg-[#0a0000] p-10 flex flex-col justify-center border-l border-white/5 relative z-10">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest flex items-center gap-2">
          <MapPin className="text-[#ff4400]" /> La Fragua Física
        </h3>
        <div className="h-0.5 w-12 bg-[#ff4400] mt-4"></div>
      </div>
      <address className="not-italic text-gray-400 space-y-4 mb-8">
        <p className="text-lg text-white">Calle Aurora, 5</p>
        <p>03203 Elche (Alicante)</p>
        <p>España</p>
      </address>
      <div className="space-y-4">
        <a href="https://maps.google.com/maps?q=Calle+Aurora+5,+03203+Elche,+Alicante" target="_blank" rel="noopener noreferrer" className="inline-block text-[#ff4400] border-b border-[#ff4400] hover:text-white hover:border-white transition-colors pb-1">
          Ver en Google Maps &rarr;
        </a>
      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  const [ignited, setIgnited] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleIgnite = useCallback(() => {
    setIgnited(true);
    setIsLoading(true);
    streamForgeResponse("Inicia la sesión motivando al usuario a comenzar su transformación ahora mismo. Sé breve e intenso. Al final, invítalo sutilmente a descargar nuestro ebook gratuito.", (chunk) => {
        setResponse(prev => prev + chunk);
        setIsLoading(false);
    });
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const prompt = input;
    setInput('');
    setResponse('');
    setIsLoading(true);
    await streamForgeResponse(prompt, (chunk) => {
      setResponse(prev => prev + chunk);
      setIsLoading(false);
    });
  }, [input, isLoading]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [response]);

  return (
    <>
      {/* Hero / Chat */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] w-full max-w-5xl px-6 py-12 mx-auto text-center">
        <header className={`transition-all duration-700 ${ignited ? 'mb-4 mt-20 sm:mt-0' : 'mb-12'}`}>
          <h1 className={`font-black tracking-widest text-white uppercase transition-all duration-700 leading-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl ${ignited ? 'scale-75' : ''}`} style={{ filter: 'drop-shadow(0 0 15px rgba(255, 68, 0, 0.6))' }}>
            Forja Tu <br className="block md:hidden" /> Mente <br className="hidden md:block" /> Hoy
          </h1>
        </header>

        <section aria-live="polite" className={`transition-all duration-700 w-full flex justify-center ${ignited ? 'flex-1 min-h-0' : ''}`}>
          {!ignited ? (
            <div className="animate-in fade-in duration-1000 slide-in-from-bottom-5">
              <h2 className="text-[#999] font-light tracking-wide max-w-xl mx-auto mb-12 text-lg sm:text-xl md:text-2xl">
                Donde el fuego transforma el acero débil en leyenda.
              </h2>
              <button onClick={handleIgnite} className="group relative w-full sm:w-auto px-10 py-5 bg-[#111111] text-white font-bold tracking-[0.25em] border border-[#ff4400] transition-all duration-300 hover:bg-[#ff1100] hover:text-black hover:scale-105" style={{ animation: 'pulse-glow 3s infinite' }}>
                ENCENDER EL FUEGO
              </button>
            </div>
          ) : (
            <div className="bg-[#111] border border-[#331010] p-6 rounded-sm w-full max-w-3xl mx-auto relative overflow-hidden min-h-[300px] mb-8 flex flex-col">
               <div className="prose prose-invert prose-lg text-gray-200 leading-relaxed text-left w-full overflow-y-auto pr-2 flex-grow">
                 {response ? <div className="font-medium whitespace-pre-wrap">{response}</div> : <div className="flex items-center justify-center h-full text-[#331010] animate-pulse"><Terminal size={32} /></div>}
                 <div ref={messagesEndRef} />
               </div>
            </div>
          )}
        </section>

        {ignited && (
          <div className="relative w-full max-w-md mx-auto mb-10 md:mb-0">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="¿Qué acero deseas forjar?" className="flex-1 bg-[#0a0a0a] border border-[#333] text-white px-5 py-4 text-lg focus:outline-none focus:border-[#ff4400]" autoFocus disabled={isLoading} />
              <button type="submit" disabled={isLoading || !input.trim()} className="bg-[#ff4400] text-black px-5 py-4 hover:bg-[#ff6600]"><Send size={28} /></button>
            </form>
          </div>
        )}
      </div>

      <ManifestoSection />
      <AuthoritySection />
      <ServicesSection />
      <LeadMagnetSection />
      <LocationSection />
    </>
  );
};

export default Home;