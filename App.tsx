import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Send, Terminal } from 'lucide-react';
import Sparks from './components/Sparks';
import { streamForgeResponse } from './services/geminiService';

const App: React.FC = () => {
  const [ignited, setIgnited] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleIgnite = useCallback(() => {
    setIgnited(true);
    setIsLoading(true);
    streamForgeResponse("Inicia la sesión motivando al usuario a comenzar su transformación ahora mismo. Sé breve e intenso.", (chunk) => {
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
    // Use min-h-[100dvh] to handle mobile browser address bars correctly
    <main className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-black selection:bg-[#ff4400] selection:text-white touch-manipulation">
      
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#1a0000_0%,_#000000_100%)] opacity-90"
      />

      {/* Spark Particles (Optimized inside component) */}
      <Sparks />

      {/* Content Container - Perfect Centering & Mobile Padding */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 w-full max-w-5xl transition-all duration-1000 ease-in-out flex-grow">
        
        {/* Title: Responsive Scaling */}
        <h1 
          className={`font-black tracking-widest text-white mb-6 uppercase transition-all duration-700 leading-tight
            text-5xl sm:text-7xl md:text-8xl lg:text-9xl
            ${ignited ? 'scale-75 -translate-y-4 md:-translate-y-8' : ''}`}
          style={{ filter: 'drop-shadow(0 0 15px rgba(255, 68, 0, 0.6))' }}
        >
          Forja Tu <br className="block md:hidden" /> Mente <br className="hidden md:block" /> Hoy
        </h1>

        {/* Subtitle / Output Area */}
        <div className={`transition-all duration-700 w-full flex justify-center ${ignited ? 'flex-1 min-h-0' : ''}`}>
          {!ignited ? (
            <p className="text-[#999] font-light tracking-wide max-w-xl mx-auto mb-12
              text-lg sm:text-xl md:text-2xl">
              Donde el fuego transforma el acero débil en leyenda.
            </p>
          ) : (
            <div className="bg-[#111] border border-[#331010] p-6 rounded-sm shadow-[0_0_30px_rgba(255,20,0,0.1)] 
              w-full max-w-3xl mx-auto relative overflow-hidden group flex flex-col
              min-h-[250px] md:min-h-[300px] mb-8 animate-in fade-in zoom-in-95 duration-500">
               
               {/* Decorative corners */}
               <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ff4400] opacity-60" />
               <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ff4400] opacity-60" />
               <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ff4400] opacity-60" />
               <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ff4400] opacity-60" />
               
               <div className="prose prose-invert prose-lg text-gray-200 leading-relaxed text-left w-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#331010] scrollbar-track-transparent pr-2 flex-grow">
                 {response ? (
                   <div className="whitespace-pre-wrap font-medium">{response}</div>
                 ) : (
                   <div className="flex items-center justify-center h-full text-[#331010] animate-pulse">
                     <Terminal size={32} />
                   </div>
                 )}
                 <div ref={messagesEndRef} />
               </div>
            </div>
          )}
        </div>

        {/* Call to Action / Input */}
        <div className="w-full max-w-md mx-auto relative mt-auto md:mt-0">
          {!ignited ? (
            <button
              onClick={handleIgnite}
              className="group relative w-full sm:w-auto px-10 py-5 bg-[#111111] text-white font-bold tracking-[0.25em] border border-[#ff4400] transition-all duration-300 
              hover:bg-[#ff1100] hover:text-black hover:scale-105 hover:shadow-[0_0_20px_#ff4400] active:scale-95
              text-lg sm:text-xl"
              style={{ animation: 'pulse-glow 3s infinite' }}
              aria-label="Encender el fuego y comenzar"
            >
              ENCENDER EL FUEGO
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="¿Qué acero deseas forjar?"
                className="flex-1 bg-[#0a0a0a] border border-[#333] text-white px-5 py-4 text-lg focus:outline-none focus:border-[#ff4400] focus:ring-1 focus:ring-[#ff4400] placeholder-gray-600 transition-colors rounded-sm"
                autoFocus
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-[#ff4400] text-black px-5 py-4 hover:bg-[#ff6600] disabled:opacity-50 disabled:hover:bg-[#ff4400] transition-colors rounded-sm flex items-center justify-center min-w-[60px]"
                aria-label="Enviar mensaje"
              >
                <Send size={28} />
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;