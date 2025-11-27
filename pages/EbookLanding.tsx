import React, { useState } from 'react';
import { ArrowRight, Lock, Check, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const EbookLanding = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 text-center">
        <div className="max-w-md animate-in fade-in zoom-in">
          <div className="w-20 h-20 bg-[#ff4400] rounded-full mx-auto flex items-center justify-center mb-6">
            <Check className="text-black w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-white mb-4 uppercase">¡Enviado!</h2>
          <p className="text-gray-400 mb-8">Revisa tu bandeja de entrada (y spam). Tu manual táctico está en camino. El primer paso ya está dado.</p>
          <Link to="/" className="text-[#ff4400] hover:text-white underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row">
      {/* Left: Content */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10">
        <Link to="/" className="absolute top-8 left-8 text-gray-600 hover:text-white text-sm uppercase tracking-widest">
          &larr; Volver
        </Link>
        
        <div className="max-w-lg mx-auto">
          <div className="inline-block bg-[#222] text-[#ff4400] px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
            Recurso Gratuito
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight uppercase">
            Mata la <span className="text-[#ff4400]">Procrastinación</span> en 72h
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            El sistema exacto que uso para recuperar días perdidos y entrar en "Deep Work" a voluntad. Sin relleno, solo tácticas.
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              "La regla de los 5 segundos modificada.",
              "Cómo diseñar un entorno a prueba de distracciones.",
              "El protocolo de dopamina para mañanas invencibles."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <Check className="text-[#ff4400] shrink-0 mt-1" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Tu Mejor Email</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@correo.com"
                className="w-full bg-[#111] border border-[#333] text-white px-5 py-4 focus:border-[#ff4400] focus:outline-none rounded-sm"
              />
            </div>
            <button type="submit" className="w-full bg-[#ff4400] hover:bg-[#ff2200] text-black font-bold py-4 text-lg uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
              <Download size={20} /> Descargar Manual Ahora
            </button>
            <p className="text-center text-xs text-gray-600 flex items-center justify-center gap-1">
              <Lock size={10} /> 100% Seguro. Cero Spam.
            </p>
          </form>
        </div>
      </div>

      {/* Right: Visual */}
      <div className="w-full md:w-1/2 bg-[#111] relative overflow-hidden flex items-center justify-center min-h-[400px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#331010_0%,_#000000_100%)] opacity-50"></div>
        {/* Abstract Book Representation */}
        <div className="relative w-64 h-96 bg-black border border-[#ff4400] shadow-[0_0_50px_rgba(255,68,0,0.3)] flex flex-col items-center justify-center p-8 text-center rotate-3 hover:rotate-0 transition-transform duration-700">
          <div className="absolute inset-2 border border-[#333]"></div>
          <h3 className="text-4xl font-black text-white uppercase leading-none z-10 relative">Anti<br/>Pereza</h3>
          <div className="mt-4 h-1 w-20 bg-[#ff4400]"></div>
        </div>
      </div>
    </div>
  );
};

export default EbookLanding;